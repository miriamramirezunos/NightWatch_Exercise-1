module.exports = {
    'Exercise 1 - Automation NightWatch JS' : function (browser) {
      browser
        .url('https://www.linkedin.com/?originalSubdomain=mx')
        .pause(2000)
        .click("nav>a:nth-of-type(2)[href*='https://www.linkedin.com/start/join']") /* Click on Join now button*/ 
        .assert.containsText('h2.title', 'Make the most of your professional life')
        .click("form fieldset button") 
        .pause(1000)
        .assert.containsText('p strong', 'Please enter your first name')
        .setValue('input[name=firstName]', 'Miriam')
        .click("form fieldset button")   
        .pause(1000)
        .assert.containsText('p strong', 'Please enter your last name')    
        .setValue('input[name=lastName]', 'Ramirez')        
        .click("form fieldset button") 
        .assert.containsText('p strong', 'Please enter your email address')          
        .pause(5000)
       .end(); 
    }
  };