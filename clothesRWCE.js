(function () {

  describe('What to Wear', function () {

      var ACTUAL;
      // This resets the value of ACTUAL (to null) before each test is run
      beforeEach(function () {
        ACTUAL = null;
      });

      it('1. a top can be added', function () {
        var fn = function (mytop) {
          var tops = mytop;
          ACTUAL = tops;
        };
        fn("shirt");
        expect(ACTUAL === 'shirt').to.be.true;
      });

      it('2. a top can be added to an exisiting array', function () {
        var fn = function (mytop) {
          var tops = ['white shirt'];
          tops = tops.concat(mytop);
          ACTUAL = tops;
        };
        fn('blue shirt');
        expect(ACTUAL).to.include('blue shirt');
      });

      it('3. a second top can be added to an array', function () {
        var fn = function (mytop) {
          var tops = ['white shirt'];
          tops = tops.concat(mytop);
          ACTUAL = tops;
        };
        fn('blue shirt');
        expect(ACTUAL).to.eql(['white shirt', 'blue shirt' ]);
      });

      it('4. a top already in array is not added', function () {
        var fn = function (mytop) {
          var tops = ['white shirt', 'blue shirt'];
          var inArray = false;
            for(var i = 0; i < tops.length; i++){
              //alert("Compare: " + tops[i] + " and " + mytop);
              if(mytop === tops[i]){
                inArray = true;
                //alert("(" + inArray + "): "+mytop + " already in list");
              }else{
                //alert("(" + inArray + "): "+ mytop + " is not equal to " +tops[i]);
              }
            }
            if(inArray === false){
              tops = tops.concat(mytop);
                //alert("conclusion: " +mytop + " is not in list");
            }else{
                //alert("conclusion: " +mytop + " is in list");
            }
            ACTUAL = tops;
          };
          fn('blue shirt');
            //alert("Tops array = " + ACTUAL);
          expect(ACTUAL).to.eql(['white shirt', 'blue shirt']);
        });


        it('5. a new top is added to the array of tops', function () {
          var fn = function (mytop) {
            var inArray = false;
            var tops = ['white shirt', 'blue shirt'];


            for(var i = 0; i < tops.length; i++){
               //alert("Compare: " + tops[i] + " and " + mytop);
               if(mytop === tops[i]){
                 inArray = true;
                 //alert("(" + inArray + "): "+mytop + " already in list");
               }else{
                 //alert("(" + inArray + "): "+ mytop + " is not equal to " +tops[i]);
               }
             }
            if(inArray === false){
              tops = tops.concat(mytop);
              //alert("conclusion: " +mytop + " is not in list");
            }else{
              //alert("conclusion: " +mytop + " is in list");
            }
            ACTUAL = tops;
          };
          fn('coat');
          //alert("Tops array = " + ACTUAL);
          expect(ACTUAL).to.eql(['white shirt', 'blue shirt', 'coat' ]);
        });

        it('6. a new top is added to the array of tops', function () {
          var fn = function (mytop) {
            var inArray = false;
            var tops = ['white shirt', 'blue shirt'];
            for(var i = 0; i < tops.length; i++){
               //alert("Compare: " + tops[i] + " and " + mytop);
               top = tops[i];
               if(mytop === top[i]){
                 inArray = true;
                 //alert("(" + inArray + "): "+mytop + " already in list");
               }else{
                 //alert("(" + inArray + "): "+ mytop + " is not equal to " +tops[i]);
               }
             }
            if(inArray === false){
              tops = tops.concat(mytop);
              //alert("conclusion: " +mytop + " is not in list");
            }else{
              //alert("conclusion: " +mytop + " is in list");
            }
            ACTUAL = tops;
          };
          fn('coat');
          //alert("Tops array = " + ACTUAL);
          expect(ACTUAL).to.eql(['white shirt', 'blue shirt', 'coat' ]);
        });

      it('7. a new top is added to the array of tops with higher order function, foreach', function () {
        var fn = function (mytop) {
          var inArray = false;
          var tops = ['white shirt', 'blue shirt'];
          //tops = tops || [];
          tops.forEach(function(top){
             //alert("Compare: " + top + " and " + mytop);
             if(mytop === top){
               inArray = true;
               //alert("(" + inArray + "): "+mytop + " already in list");
             }else{
               //alert("(" + inArray + "): "+ mytop + " is not equal to " +top);
             }
           });
          if(inArray === false){
            tops = tops.concat(mytop);
            //alert("conclusion: " +mytop + " is not in list");
          }else{
            //alert("conclusion: " +mytop + " is in list");
          }
          ACTUAL = tops;
        };
        fn('coat');

        //alert("Tops array = " + ACTUAL);
        expect(ACTUAL).to.eql(['white shirt', 'blue shirt', 'coat' ]);
      });

      it('8. add top to tops array, bottom to bottoms array', function () {
        var topArray = function (n) {
          var mytop = n;
          var inArray = false;
          var tops = ['white shirt', 'blue shirt'];
          tops.forEach(function(top){
             //alert("Compare: " + top + " and " + mytop);
             if(mytop === top){
               inArray = true;
               //alert("(" + inArray + "): "+mytop + " already in list");
             }else{
               //alert("(" + inArray + "): "+ mytop + " is not equal to " +top);
             }
           });
          if(inArray === false){
            tops = tops.concat(mytop);
            //alert("conclusion: " +mytop + " is not in list");
          }else{
            //alert("conclusion: " +mytop + " is in list");
          }
          ACTUAL = tops;
        };
        var bottomArray = function (n) {
          var myBottom = n;
          var inArray = false;
          var bottoms = ['pants', 'skirt'];
          bottoms.forEach(function(bottom){
             //alert("Compare: " + bottom + " and " + myBottom);
             if(myBottom === bottom){
               inArray = true;
               //alert("(" + inArray + "): "+myBottom + " already in list");
             }else{
               //alert("(" + inArray + "): "+ myBottom + " is not equal to " + bottom);
             }
           });
          if(inArray === false){
            bottoms = bottoms.concat(myBottom);
            //alert("conclusion: " +myBottom + " is not in list");
          }else{
            //alert("conclusion: " +myBottom + " is in list");
          }
          ACTUAL = bottoms;
        };
        var fn = function(n, func){
          return func(n);
        };
        fn('coat', topArray);
        //alert("Array = " + ACTUAL);
        expect(ACTUAL).to.eql(['white shirt', 'blue shirt', 'coat' ]);
        fn('shorts', bottomArray);
        //alert("Array = " + ACTUAL);
        expect(ACTUAL).to.eql(['pants', 'skirt', 'shorts' ]);

      });

      it('9. obtain property of wardrobe object', function () {
        var fn = function() {
          var wardrobe = {
            topslist: ['white shirt', 'blue shirt'],
            bottomslist: ['pants', 'skirt']
            };
          ACTUAL = wardrobe.topslist;
        };
        fn();
        expect(ACTUAL).to.eql(['white shirt', 'blue shirt' ]);
      });

      it('10. add second new top to existing wardrobe object', function () {
        var fn = function(n) {
          newTop = n;
          var wardrobe = {
            topslist: ['white shirt', 'blue shirt'],
            bottomslist: ['pants', 'skirt']
            };
            //alert(wardrobe.topslist);
            wardrobe.topslist = wardrobe.topslist.concat(newTop);
            //alert(wardrobe.topslist);
            //alert(newTop);
          ACTUAL = wardrobe.topslist;
        };
        fn('coat');
        expect(ACTUAL).to.eql(['white shirt', 'blue shirt', 'coat' ]);
      });

      it('11. add new top & bottom to existing wardrobe object with callback function forEach', function () {
        var inArray = false;
        var tops = function(n) {
          newTop = n;
          var wardrobe = {
            topslist: ['white shirt', 'blue shirt']
            };
            wardrobe.topslist.forEach(function(top){
               if(newTop === top){
                 inArray = true;
               }
             });
            if(inArray === false){
              wardrobe.topslist = wardrobe.topslist.concat(newTop);
            }
          ACTUAL = wardrobe.topslist;
        };
        var bottoms = function(n) {
          newBottom = n;
          var wardrobe = {
            bottomslist: ['pants', 'skirt']
            };
            wardrobe.bottomslist.forEach(function(bottom){
              if(newBottom === bottom){
                inArray = true;
              }
            });
            if(inArray === false){
            wardrobe.bottomslist = wardrobe.bottomslist.concat(newBottom);
          }
          ACTUAL = wardrobe.bottomslist;
        };

        var fn = function(n, func){
          return func(n);
        };
        fn('coat', tops);
        expect(ACTUAL).to.eql(['white shirt', 'blue shirt', 'coat' ]);
        fn('shorts', bottoms);
        expect(ACTUAL).to.eql(['pants', 'skirt', 'shorts' ]);
      });

      it('12. return list of wardrobe', function () {
        var allWardrobe = function(){
          var myWardrobe;
          var allBottoms = [];
          var allTops = [];
          var allItems = [];
          var wardrobe = {
            topslist: ['white shirt', 'blue shirt'],
            bottomslist: ['pants', 'skirt']
            };
          var tops = function() {
            //alert("inside tops function");
              wardrobe.topslist.forEach(function(top){
                var str = top;
                //alert(str);
                //alert(top);
                //alert(index + 1 + ". " + top);
                allTops = allTops.concat(str);
              });
              return allTops;
              alert(allTops);
          };
          var bottoms = function() {
              wardrobe.bottomslist.forEach(function(bottom){
                var str = bottom;
                allBottoms = allBottoms.concat(str);
              });
              return allBottoms;
          };
          tops();
          bottoms();
          myWardrobe = allTops.concat(allBottoms);
          myWardrobe.forEach(function(article, index){
            var str = " " + (index + 1) + ". " + article;
            allItems = allItems.concat(str);
          });
          alert("My Wardrobe: " + allItems);
          ACTUAL = allItems;
        };

        allWardrobe();
        expect(ACTUAL).to.eql(['white shirt', 'blue shirt', 'coat' ]);
      });

    });

})();
