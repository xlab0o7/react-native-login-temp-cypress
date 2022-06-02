/// <reference types="cypress" />

describe('Checking sign up btn',()=>{
    it('visiting homepage', () => {
        cy.visit('http://localhost:19006/')
    })

    it('pressing sign in btn', () => {
        cy.get('#root > div > div > div > div > div > div > div > div.css-view-1dbjc4n.r-bottom-1p0dtai.r-left-1d2f490.r-pointerEvents-12vffkv.r-position-u8s1d.r-right-zchlnj.r-top-ipm5af > div.css-view-1dbjc4n.r-flex-13awgt0.r-pointerEvents-12vffkv > div > div > div > div.css-view-1dbjc4n.r-flex-13awgt0 > div > div.css-view-1dbjc4n.r-alignItems-1awozwy.r-alignSelf-1kihuf0.r-flex-13awgt0.r-justifyContent-1777fci.r-maxWidth-131bt2l.r-padding-1pcd2l5.r-width-13qz1uu > div.css-view-1dbjc4n.r-backgroundColor-14lw9ot.r-width-13qz1uu > div > div').click("center")
    })
  
    it('pressing back btn', ()=>{
        cy.get('#root > div > div > div > div > div > div > div:nth-child(2) > div.css-view-1dbjc4n.r-bottom-1p0dtai.r-left-1d2f490.r-pointerEvents-12vffkv.r-position-u8s1d.r-right-zchlnj.r-top-ipm5af > div.css-view-1dbjc4n.r-flex-13awgt0.r-pointerEvents-12vffkv > div > div > div > div.css-view-1dbjc4n.r-flex-13awgt0 > div > div.css-view-1dbjc4n.r-alignItems-1awozwy.r-alignSelf-1kihuf0.r-flex-13awgt0.r-justifyContent-1777fci.r-maxWidth-131bt2l.r-padding-1pcd2l5.r-width-13qz1uu > div.css-view-1dbjc4n.r-cursor-1loqt21.r-left-ws9h79.r-position-u8s1d.r-top-1ki14p2.r-touchAction-1otgn73.r-transitionProperty-1i6wzkk.r-userSelect-lrvibr > div > img').click('topLeft')
      })

}) 