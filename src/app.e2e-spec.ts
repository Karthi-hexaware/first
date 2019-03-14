import { AppPage } from './app.po';
import { browser, by,logging, element } from 'protractor';



// describe('Protractor Demo App', function() {
//   it('should multiply two integers',function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model('first')).sendKeys(5);
//     element(by.model('second')).sendKeys(5);
// element(by.model('operator')).click();
// element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
// element(by.id('gobutton')).click();

// expect(element(by.binding('latest')).getText()).toEqual('25');
// });
// });

// describe('Protractor Demo App', function() {
//   it('should div two integers',function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model('first')).sendKeys(5);
//     element(by.model('second')).sendKeys(5);
// element(by.model('operator')).click();
// element(by.xpath(".//option[@value= 'DIVISION']")).click();
// element(by.id('gobutton')).click();

// expect(element(by.binding('latest')).getText()).toEqual('1');
// });
// });

// describe('Protractor Demo App', function() {
//   it('should modulo two integers',function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model('first')).sendKeys(2);
//     element(by.model('second')).sendKeys(2);
// element(by.model('operator')).click();
// element(by.xpath(".//option[@value= 'MODULO']")).click();
// element(by.id('gobutton')).click();

// expect(element(by.binding('latest')).getText()).toEqual('0');
// });
// });

// describe('Protractor Demo App', function() {
//   it('should sub two integers',function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model('first')).sendKeys(5);
//     element(by.model('second')).sendKeys(2);
// element(by.model('operator')).click();
// element(by.xpath(".//option[@value= 'SUBTRACTION']")).click();
// element(by.id('gobutton')).click();

// expect(element(by.binding('latest')).getText()).toEqual('3');
// });
// });

// describe('Protractor Demo App', function() {
//   it('should add one and two',function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model('first')).sendKeys(1);
//     element(by.model('second')).sendKeys(2);

//     element(by.id('gobutton')).click();

//     expect(element(by.binding('latest')).getText()).toEqual('3');
//   });
// });

// describe('Protractor Demo App', function() {
//   it('should have a title',function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');

//     expect(browser.getTitle()).toEqual('Super Calculator');
//   });
// });

// describe('Protractor Demo App', function() {
//   it('should have google a title',function() {
//     browser.ignoreSynchronization=true;
//     browser.get('https://www.google.com');

//     expect(browser.getTitle()).toEqual('Google');
//   });
// });

// describe('protractor Demo App',function() {
//   it('should search in google',function() {
//     browser.ignoreSynchronization = true;    
//     browser.get('https://www.google.com/');
//     element(by.name('q')).sendKeys('Sanjana');
//     // element(by.model('second')).sendKeys(3);
//     // element(by.model('operator')).click();
//     // element(by.xpath(".//option[@value='MODULO']")).click();
//     // element(by.id('gobutton')).click();
//     // expect(element(by.binding('latest')).getText()).toEqual('1');
//   });
//   });

  describe('Protractor Demo App', function() {
    it('should have EMPLOYEE DETAILS a title',function() {
      browser.ignoreSynchronization=true;
      browser.get('http://localhost:4200');
  
      expect(browser.getTitle()).toEqual('LmApp');

      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

    });
  });

  describe('Protractor Demo App', function() {
    it('should have Pending Leaves Click',function() {
      browser.ignoreSynchronization=true;
      browser.get('http://localhost:4200');
  
      // expect(browser.getTitle()).toEqual('LmApp');

      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('home')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('row0')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.name('password')).sendKeys("1234");
      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      });

      element(by.id('login')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('leavePending')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('row5')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('approve')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.name('comments')).sendKeys("Enjoy");


    });
  });

  describe('Protractor Demo App for Homepage click', function() { 

    it('should have ApplyLeave for validation AlreadyApplied',function() {
      browser.ignoreSynchronization=true;
      browser.get('http://localhost:4200');
  
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('home')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('row1')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.name('password')).sendKeys("1234");
      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      });

      element(by.id('login')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('applyLeave')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('leaStartDate')).sendKeys("02/02/2021");
      element(by.id('leaEndDate')).sendKeys("02/02/2021");
      element(by.id('leaLeaveType')).sendKeys("EL");
      element(by.id('leaReason')).sendKeys("SICK");

      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('apply')).click();
      browser.sleep(6000).then(function() {
        console.log('waited 2 seconds');
      }); 
      expect(element(by.name('result')).getText()).toEqual('Already applied on given date....');
      browser.sleep(6000).then(function() {
        console.log('waited 2 seconds');
      }); 
    });

    it('should have ApplyLeave for validation Sunday',function() {
      browser.ignoreSynchronization=true;
      browser.get('http://localhost:4200');
  
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('home')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('row1')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.name('password')).sendKeys("1234");
      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      });

      element(by.id('login')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('applyLeave')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('leaStartDate')).sendKeys("03/17/2019");
      element(by.id('leaEndDate')).sendKeys("03/17/2019");
      element(by.id('leaLeaveType')).sendKeys("EL");
      element(by.id('leaReason')).sendKeys("SICK");

      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('apply')).click();
      browser.sleep(6000).then(function() {
        console.log('waited 2 seconds');
      }); 
      expect(element(by.name('result')).getText()).toEqual('StartDate cannot be sunday...');
      browser.sleep(6000).then(function() {
        console.log('waited 2 seconds');
      }); 
    });

    it('should have ApplyLeave for validation Startdate VS CurrentDate',function() {
      browser.ignoreSynchronization=true;
      browser.get('http://localhost:4200');
  
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('home')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('row1')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.name('password')).sendKeys("1234");
      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      });

      element(by.id('login')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('applyLeave')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('leaStartDate')).sendKeys("03/11/2019");
      element(by.id('leaEndDate')).sendKeys("03/11/2019");
      element(by.id('leaLeaveType')).sendKeys("EL");
      element(by.id('leaReason')).sendKeys("SICK");

      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('apply')).click();
      browser.sleep(6000).then(function() {
        console.log('waited 2 seconds');
      }); 
      expect(element(by.name('result')).getText()).toEqual('Start date is less than current date');
      browser.sleep(6000).then(function() {
        console.log('waited 2 seconds');
      }); 
    });

    it('should have ApplyLeave for validation Startdate',function() {
      browser.ignoreSynchronization=true;
      browser.get('http://localhost:4200');
  
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('home')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('row1')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.name('password')).sendKeys("1234");
      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      });

      element(by.id('login')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('applyLeave')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('leaStartDate')).sendKeys("04/11/2019");
      element(by.id('leaEndDate')).sendKeys("04/08/2019");
      element(by.id('leaLeaveType')).sendKeys("EL");
      element(by.id('leaReason')).sendKeys("SICK");

      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('apply')).click();
      browser.sleep(6000).then(function() {
        console.log('waited 2 seconds');
      }); 
      expect(element(by.name('result')).getText()).toEqual('End date must be greater than Start date...');
      browser.sleep(6000).then(function() {
        console.log('waited 2 seconds');
      }); 
    });


    it('should have EMPLOYEE DETAILS a Homepage Click',function() {
      browser.ignoreSynchronization=true;
      browser.get('http://localhost:4200');
  
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('home')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('row1')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.name('password')).sendKeys("1234");
      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      });

      element(by.id('login')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('applyLeave')).click();
      browser.sleep(1000).then(function() {
        console.log('waited 2 seconds');
      }); 

      element(by.id('leaStartDate')).sendKeys("04/06/2019");
      element(by.id('leaEndDate')).sendKeys("04/04/2019");
      element(by.id('leaLeaveType')).sendKeys("EL");
      element(by.id('leaReason')).sendKeys("SICK");

      browser.sleep(2000).then(function() {
        console.log('waited 2 seconds');
      }); 
      element(by.id('apply')).click();
      browser.sleep(6000).then(function() {
        console.log('waited 2 seconds');
      }); 
      expect(element(by.name('result')).getText()).toEqual('StartDate cannot be saturday...');
      browser.sleep(6000).then(function() {
        console.log('waited 2 seconds');
      }); 
    });
  });

  // describe('Protractor Demo App', function() {
  //   it('should have SIGN-IN a title',function() {
  //     // browser.ignoreSynchronization=true;
  //     browser.get('http://localhost:4200/Login');
  //     element(by.model('username')).sendKeys(1000);
  //     element(by.model('password')).sendKeys(1234);
  //     element(by.model('login')).click();
  
  //   });
  // });
  // it('should ApplyLeave ', function() { 
  //   // browser.ignoreSynchronization = true;
  //   browser.get('http://localhost:4200/Login');
  //   element(by.name('username')).sendKeys("2000");
  //   browser.sleep(5000).then(function() {
  //     console.log('waited 5 seconds');
  //   });
  //   element(by.name('password')).sendKeys("1234");
  //   browser.sleep(5000).then(function() {
  //     console.log('waited 5 seconds');
  //   });
  //   element(by.name('Login')).click();
  //   browser.sleep(5000).then(function() {
  //     console.log('waited 5 seconds');
  //   });  
  //   element(by.id('applyLeave')).click();
  //   browser.sleep(5000).then(function() {
  //    console.log('waited 5 seconds');
  //  });  

  //  element(by.id('leaStartDate')).sendKeys("04/03/2019");
  //  browser.sleep(5000).then(function() {
  //   console.log('waited 5 seconds');
  //   });  
  //   element(by.id('leaEndDate')).sendKeys("04/01/2019");
  //   browser.sleep(5000).then(function() {
  //    console.log('waited 5 seconds');
  //    });  
  //    element(by.id('leaReason')).sendKeys("Sick");
  //    browser.sleep(5000).then(function() {
  //    console.log('waited 5 seconds');
  //    });  
     

  // });

  

  it('should login', function() { 

    // browser.ignoreSynchronization = true;
    browser.get('http://localhost:4200/login');
    element(by.name('username')).sendKeys("2000");
    browser.sleep(5000).then(function() {
      console.log('waited 5 seconds');
    });
    element(by.name('password')).sendKeys("1234");
    browser.sleep(5000).then(function() {
      console.log('waited 5 seconds');
    });
    element(by.name('login')).click();
    browser.sleep(5000).then(function() {
      console.log('waited 5 seconds');
    });  
   //  element(by.cssContainingText("a","Apply Leave")).getAttribute('href')
  });


describe('Protractor Demo App', function() { 
 
  
 // it('should ApplyLeave', function() { 
   
    
 //     // browser.ignoreSynchronization = true;
 //     browser.get('http://localhost:4200/dashboard/applyLeave');
 //   });

  it('should ApplyLeave ', function() { 
  
   
    // browser.ignoreSynchronization = true;
    browser.get('http://localhost:4200');
    browser.sleep(5000).then(function() {
      console.log('waited 5 seconds');
    });
  });
});
  

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  xit('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to proTest!');
  });
  
});
