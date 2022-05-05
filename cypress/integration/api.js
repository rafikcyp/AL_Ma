describe("test api",()=>{

    it("should test alma eligibility endpoint without queries", ()=>{

        cy.request({
            method: 'POST',
            url: 'https://api.getalma.eu/v2/payments/eligibility',
            timeout: 0,
            headers: {                
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:'Alma-Auth sk_test_3PJRwp8xUeKsiqOu2UqAOO41'
                
            },
            body: {                
                "purchase_amount": 81700                
            }
        
        }).then((response) => {
                expect(response.status).to.eq(200);              
        
            })
    })

    it("should test alma eligibility endpoint with queries attirbute", ()=>{

        cy.request({
            method: 'POST',
            url: 'https://api.getalma.eu/v2/payments/eligibility',
            timeout: 0,
            headers: {                
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:'Alma-Auth sk_test_3PJRwp8xUeKsiqOu2UqAOO41'
                
            },
            body: {                
                "purchase_amount": 81700,
                "queries": [
                                {
                                    "installments_count": 3,
                                },
                                {
                                    "installments_count": 4,
                                },
                                {
                                    "installments_count": 1,
                                    "deferred_days": 15
                                }
                            ]          
            }
        
        }).then((response) => {
                expect(response.status).to.eq(200);              
        
            })
    })



})




