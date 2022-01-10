import time
from azure.identity import DefaultAzureCredential

## Import control plane sdk

from azure.mgmt.confidentialledger import ConfidentialLedger as ConfidentialLedgerAPI
from azure.mgmt.confidentialledger.models import ConfidentialLedger

# import data plane sdk

from azure.confidentialledger import ConfidentialLedgerClient
from azure.confidentialledger.identity_service import ConfidentialLedgerIdentityServiceClient
from azure.confidentialledger import TransactionState
def readData():
    # Set variables
    rg = config.creds["rg"]
    ledger_name = config.creds["ledger_name"]
    subscription_id = config.creds["subscription_id"]

    identity_url = config.creds["identity_url"]
    ledger_url = config.creds["ledger_url"]
    # Need to do az login to get default credential to work

    credential = DefaultAzureCredential()

    # Control plane (azure.mgmt.confidentialledger)
    # 
    # initialize endpoint with credential and subscription

    confidential_ledger_mgmt = ConfidentialLedgerAPI(
        credential, subscription_id
    )
    ledger_tls_cert_file_name = "networkcert.pem"

    ledger_client = ConfidentialLedgerClient(
        endpoint=ledger_url, 
        credential=credential,
        ledger_certificate_path=ledger_tls_cert_file_name
    )

    # Read from the ledger
    entry = ledger_client.get_ledger_entries()
    print(entry)
    # for i, r in enumerate(entry):
    #     print(len(r.contents))
