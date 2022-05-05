describe("suite de test de panier", ()=>{
    
    before(() =>{
        
        cy.visit('/')
    })

    it("Should add to cart", ()=>{
        cy.get('button#1').click()
        cy.get('button#2').click()
        cy.get('button#4').click()
        //cy.get('button#go-to-contact-details').should('include', "480.00€")
        cy.get('#go-to-contact-details').contains("Passer la commande - 480.00 €").should('be.visible')
    })

    it("Should  change county to belgium", () =>{
        cy.get('#country_selector').select("BE")
        //Check that the selected value is really Belgique.
        cy.get('#country_selector option:selected').should('have.text', "🇧🇪 Belgique")
    })

    it("Should click on -Passer la Commande- button", ()=>{
        cy.get('#go-to-contact-details').click()
        cy.get('#plan-1-0').contains("Payer en 1 fois avec ")
        cy.get('#plan-1-0 > img').invoke('attr', 'src').should('include', 'logo')
        cy.get('#plan-1-15').contains("Payer en 1 fois dans 15 jours avec ")   
        cy.get('#plan-1-15 > img').invoke('attr', 'src').should('include', 'logo.svg')     
        cy.get('#plan-1-1').contains("Payer en 1 fois dans 1 jours avec ")
        cy.get('#plan-1-1 > img').invoke('attr', 'src').should('include', 'logo.svg')
        cy.get('#plan-2-0').contains("Payer en 2 fois avec ")
        cy.get('#plan-2-0 > img').invoke('attr', 'src').should('include', 'logo.svg')
        cy.get('#plan-3-0').contains("Payer en 3 fois avec ")
        cy.get('#plan-3-0 > img').invoke('attr', 'src').should('include', 'logo.svg')
        cy.get('#plan-4-0').contains("Payer en 4 fois avec ")
        cy.get('#plan-4-0 > img').invoke('attr', 'src').should('include', 'logo.svg')
    })

    it("Should, change language to Deutsch",()=>{
        cy.get('#locale').select("de")
        //Check that the selected value is really Belgique.
        cy.get('#locale option:selected').should('have.text', "Deutsch")
        //missed step in specification
        cy.get('#fragments').uncheck()
        //cy.get('#merchant-client').check()
        cy.get('#merchant-deferred-trigger').check()
        cy.get('#merchant-deferred-trigger-description').clear().type("Shipping")
        cy.get('#plan-4-0').click()
    })

    it("Should, vérify domaine",()=>{
        cy.url().should('include', 'https://checkout.sandbox.getalma.eu')
    })

    it("Should, Verify Merchant name",()=>{
       
        cy.contains("real_merchant_BE").should('be.visible')
    })
    it("Should, Verify ich zahle..",()=>{
        cy.contains("Ich zahle 480,00 € in 4 Raten").should('be.visible')
        cy.contains("Davon Kosten").should('be.visible')
        cy.contains("0,00 €").should('be.visible')
       
    })
    it("Should, Verify Davon Kosten..",()=>{       
        cy.contains("Davon Kosten").should('be.visible')
        cy.contains("0,00 €").should('be.visible')
       
    })
    
})
