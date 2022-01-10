import time
from azure.identity import DefaultAzureCredential

## Import control plane sdk

from azure.mgmt.confidentialledger import ConfidentialLedger as ConfidentialLedgerAPI
from azure.mgmt.confidentialledger.models import ConfidentialLedger

# import data plane sdk

from azure.confidentialledger import ConfidentialLedgerClient
from azure.confidentialledger.identity_service import ConfidentialLedgerIdentityServiceClient
from azure.confidentialledger import TransactionState

def writeToLedger():
     # Set variables
     rg = config.creds["rg"]
     ledger_name = config.creds["ledger_name"]
     subscription_id = config.creds["subscription_id"]

     identity_url = config.creds["identity_url"]
     ledger_url = config.creds["ledger_url"]

     # Need to do az login to get default credential to work

     credential = DefaultAzureCredential()

     ledger_tls_cert_file_name = "networkcert.pem"

     ledger_client = ConfidentialLedgerClient(
          endpoint=ledger_url, 
          credential=credential,
          ledger_certificate_path=ledger_tls_cert_file_name
     )

     # Write to the ledger
     append_result = ledger_client.append_to_ledger(entry_contents="Image Uploaded")
     print("Transaction ID", append_result.transaction_id)

     # Wait until transaction is committed on the ledger
     while True:
          commit_result = ledger_client.get_transaction_status(append_result.transaction_id)
          print("Commit Result", commit_result.state)
          if (commit_result.state == TransactionState.COMMITTED):
               break
          time.sleep(1)

     print("")
     # Read from the ledger
     # entry = ledger_client.get_ledger_entries()
     # for i, r in enumerate(entry):
     #    print(len(r.contents))
