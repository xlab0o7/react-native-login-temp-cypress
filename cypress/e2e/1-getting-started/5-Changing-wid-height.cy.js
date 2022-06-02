describe('On HomePage',()=>{
    it('visiting homepage', () => {
        cy.visit('http://localhost:19006/')
    })

    it('Switching the resolution to 550x750', () => {

        
        cy.viewport(550, 750) // Set viewport to 550px x 750px
})

    it('Switching the resolution to 375x667', () => {
        cy.viewport("iphone-se2","landscape")
        cy.viewport(375,667)
    
})

    it('Switching the resolution to 414x896', () => {
        cy.viewport("iphone-xr","landscape")
        cy.viewport(414,896)
    
})

    it('Switching the resolution to 360x760', () => {
        cy.viewport("samsung-s10","landscape")
        cy.viewport(360,760)
    
})

    it('Switching the resolution to 1366x768', () => {
        cy.viewport("macbook-11" , "landscape")
        cy.viewport(1366,768)
    
})

    it('Switching the resolution to 1280x800', () => {
    
        cy.viewport( "macbook-13" ,"landscape")
        cy.viewport( "macbook-13" )
})

    it('Switching the resolution to 1536x960', () => {
    
        cy.viewport("macbook-16", 'landscape')
        cy.viewport("macbook-16")
})
})