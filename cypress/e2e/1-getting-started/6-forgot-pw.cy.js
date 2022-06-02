/// <reference types="cypress" />
 
describe('On HomePage',()=>{
    it('visiting homepage', () => {
        cy.visit('http://localhost:19006/')
    })

    it("pressing login btn", ()=>{
    
        cy.get('#root > div > div > div > div > div > div > div > div.css-view-1dbjc4n.r-bottom-1p0dtai.r-left-1d2f490.r-pointerEvents-12vffkv.r-position-u8s1d.r-right-zchlnj.r-top-ipm5af > div.css-view-1dbjc4n.r-flex-13awgt0.r-pointerEvents-12vffkv > div > div > div > div.css-view-1dbjc4n.r-flex-13awgt0 > div > div.css-view-1dbjc4n.r-alignItems-1awozwy.r-alignSelf-1kihuf0.r-flex-13awgt0.r-justifyContent-1777fci.r-maxWidth-131bt2l.r-padding-1pcd2l5.r-width-13qz1uu > div:nth-child(4) > div > div').click('center')
      
      })

    
    it("pressing forgot your pasword link", ()=>{
      
      cy.get('#root > div > div > div > div > div > div > div:nth-child(2) > div.css-view-1dbjc4n.r-bottom-1p0dtai.r-left-1d2f490.r-pointerEvents-12vffkv.r-position-u8s1d.r-right-zchlnj.r-top-ipm5af > div.css-view-1dbjc4n.r-flex-13awgt0.r-pointerEvents-12vffkv > div > div > div > div.css-view-1dbjc4n.r-flex-13awgt0 > div > div.css-view-1dbjc4n.r-alignItems-1awozwy.r-alignSelf-1kihuf0.r-flex-13awgt0.r-justifyContent-1777fci.r-maxWidth-131bt2l.r-padding-1pcd2l5.r-width-13qz1uu > div.css-view-1dbjc4n.r-alignItems-obd0qt.r-marginBottom-1peese0.r-width-13qz1uu > div > div').click('center')
    
    })
    
    it('Typing Email', ()=>{
      cy.get('#root > div > div > div > div > div > div > div:nth-child(3) > div.css-view-1dbjc4n.r-bottom-1p0dtai.r-left-1d2f490.r-pointerEvents-12vffkv.r-position-u8s1d.r-right-zchlnj.r-top-ipm5af > div.css-view-1dbjc4n.r-flex-13awgt0.r-pointerEvents-12vffkv > div > div > div > div.css-view-1dbjc4n.r-flex-13awgt0 > div > div.css-view-1dbjc4n.r-alignItems-1awozwy.r-alignSelf-1kihuf0.r-flex-13awgt0.r-justifyContent-1777fci.r-maxWidth-131bt2l.r-padding-1pcd2l5.r-width-13qz1uu > div.css-view-1dbjc4n.r-marginVertical-usiww2.r-width-13qz1uu > div.css-view-1dbjc4n > div:nth-child(2) > div > input').type('Fake.mail@gmail.com')

    })
    
    it('pressing the send Instruction btn', ()=>{
        cy.get('#root > div > div > div > div > div > div > div:nth-child(3) > div.css-view-1dbjc4n.r-bottom-1p0dtai.r-left-1d2f490.r-pointerEvents-12vffkv.r-position-u8s1d.r-right-zchlnj.r-top-ipm5af > div.css-view-1dbjc4n.r-flex-13awgt0.r-pointerEvents-12vffkv > div > div > div > div.css-view-1dbjc4n.r-flex-13awgt0 > div > div.css-view-1dbjc4n.r-alignItems-1awozwy.r-alignSelf-1kihuf0.r-flex-13awgt0.r-justifyContent-1777fci.r-maxWidth-131bt2l.r-padding-1pcd2l5.r-width-13qz1uu > div:nth-child(5) > div > div').click('bottom')
    })
  }) 