const data = {
    "apiComponentList" : [
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "635fcbd36c0bcffbaaa7c692",
                "apiConfigReference" : {
                    "serviceName" : "Fintech LSP Service",
                    "verb" : "PUT",
                    "url" : "/api/v1/realm/{realmId}/user/{userId}/loans/additionalInfo"
                },
                "name" : "PUT: /api/v1/realm/{realmId}/user/{userId}/loans/additionalInfo"
            },
            "mappings" : {
                "requestBodyMapping" : {
                    "loanId" : "$.input.loanId",
                    "refType" : "$.input.refType",
                    "refId" : "$.input.refId"
                },
                "pathParamMapping" : {
                    "userId" : "$$USERID",
                    "realmId" : "$$REALM_ID"
                }
            },
            "name" : "update-loan-additional-info"
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "627cedc02bdccddad4e0f48c",
                "apiConfigReference" : {
                    "serviceName" : "Fintech LSP Service",
                    "verb" : "GET",
                    "url" : "/api/v1/realm/{realmId}/user/{userId}/loans/{loanId}"
                },
                "name" : "GET: /api/v1/realm/{realmId}/user/{userId}/loans/{loanId}"
            },
            "mappings" : {
                "requestBodyMapping" : {

                },
                "pathParamMapping" : {
                    "realmId" : "ninjacart",
                    "userId" : "$$USERID",
                    "loanId" : "$.input.loanId"
                },
                "headerMapping" : {

                }
            },
            "name" : "get-all-loans",
               
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "6362296d6c0bcffbaaa7c6a7",
                "apiConfigReference" : {
                    "serviceName" : "NC LSP Gateway Service",
                    "verb" : "POST",
                    "url" : "/api/loans/{loanId}/approve"
                },
                "name" : "approve-loan-by-id"
            },
            "mappings" : {
                "requestBodyMapping" : {
                    "__SELF" : {
                        "approvedOnDate" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['submittedOnDate']",
                        "approvedLoanAmount" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['allowedLimit']",
                        "expectedDisbursementDate" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['expectedDisbursementDate']",
                        "note" : "approving loan",
                        "locale" : "en",
                        "dateFormat" : "dd-MM-yyyy"
                    }
                },
                "pathParamMapping" : {
                    "loanId" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['externalId']"
                }
            },
            "name" : "approve-loan-by-id"
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "6362296d6c0bcffbaaa7c6ab",
                "apiConfigReference" : {
                    "serviceName" : "NC LSP Gateway Service",
                    "verb" : "POST",
                    "url" : "/api/makercheckers/{commandId}/approve"
                },
                "name" : "approve-maker-checker"
            },
            "mappings" : {
                "pathParamMapping" : {
                    "commandId" : "$.auto-approve-liquiloans-bnpl-loan[2]['commandId']"
                }
            },
            "ruleConfigIdentifierDefinition" : {
                "evaluationMode" : "CONTINUOUS",
                "expressions" : [
                    {
                        "type" : "CONDITIONAL",
                        "rhs" : "{{$.auto-approve-liquiloans-bnpl-loan[2].commandId}} !=null"
                    }
                ],
                "name" : "convertToApproveLoan"
            },
            "runtimeConfig" : {
                "continueOnError" : true
            },
            "name" : "approve-maker-checker"
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "638690fafb356927656761df",
                "apiConfigReference" : {
                    "serviceName" : "User Store Services",
                    "verb" : "GET",
                    "url" : "/api/v1/{entityType}/{id}"
                },
                "name" : "GET: /api/v1/{entityType}/{id}"
            },
            "mappings" : {
                "requestBodyMapping" : {

                },
                "pathParamMapping" : {
                    "entityType" : "User",
                    "id" : "$$USERID"
                },
                "headerMapping" : {

                }
            },
            "name" : "GET: /api/v1/{entityType}/{id}"
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "63bea25730c49e00077b54e4",
                "apiConfigReference" : {
                    "serviceName" : "Ninjapay Services",
                    "verb" : "POST",
                    "url" : "/ninjapay/api/v1/bnpl/realms/{realmId}/users/{userId}/onboarding/status"
                },
                "name" : "update-liquiloans-status"
            },
            "mappings" : {
                "requestBodyMapping" : {
                    "userId" : "$.auto-approve-liquiloans-bnpl-loan[4][0].User.id",
                    "realmId" : "$.auto-approve-liquiloans-bnpl-loan[4][0].User.primaryRealm",
                    "phoneNumber" : "$.auto-approve-liquiloans-bnpl-loan[4][0].User.primaryPhoneNumber",
                    "status" : "ACTIVE"
                },
                "pathParamMapping" : {
                    "userId" : "$.auto-approve-liquiloans-bnpl-loan[4][0].User.id",
                    "realmId" : "$.auto-approve-liquiloans-bnpl-loan[4][0].User.primaryRealm"
                }
            },
            "name" : "update-liquiloans-status"
        }
    ],
    "responseDefinition" : {
        "responseMapping" : {
            "0" : "$.auto-approve-liquiloans-bnpl-loan[0]",
            "1" : "$.auto-approve-liquiloans-bnpl-loan[1]",
            "2" : "$.auto-approve-liquiloans-bnpl-loan[2]",
            "3" : "$.auto-approve-liquiloans-bnpl-loan[3]",
            "4" : "$.auto-approve-liquiloans-bnpl-loan[4]",
            "5" : "$.auto-approve-liquiloans-bnpl-loan[5]",
            "message" : "approved loan and updated LiquiLoans status to ACTIVE",
            "externalId" : "$.auto-approve-liquiloans-bnpl-loan[1].data.externalId",
            "approvedOnDate" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['expectedDisbursementDate']",
            "approvedLoanAmount" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['allowedLimit']",
            "expectedDisbursementDate" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['expectedDisbursementDate']"
        }
    },
    "active" : true,
    "realmId" : "dd180bca-465a-470a-abe4-9d5a15ded551",
    "nameVersion" : "auto-approve-liquiloans-bnpl-loan_1",
    "tags" : [
        "ninjapay"
    ],
    "name" : "auto-approve-liquiloans-bnpl-loan",
    "_class" : "com.ninjacart.wf.infra.adapters.domains.configuration.entities.ServiceConfigEntity"
}

export default data;