{"filter":false,"title":"main.js","tooltip":"/app/scripts/controllers/main.js","undoManager":{"mark":35,"position":35,"stack":[[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":39,"column":0},"end":{"row":40,"column":0}},"nl":"\n","lines":[">>>>>>> new feature add resource"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":12,"column":0},"end":{"row":13,"column":0}},"nl":"\n","lines":["======="]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":37,"column":0},"end":{"row":38,"column":0}},"nl":"\n","lines":["      $scope.functionInText = '{\"name\": \"kaka\"}';"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":45,"column":0},"end":{"row":47,"column":0}},"nl":"\n","lines":["<<<<<<< HEAD","======="]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":37,"column":0},"end":{"row":45,"column":0}},"nl":"\n","lines":["      $scope.reloadCurrentFunction = function(){","         try{","            var parsedObject = JSON.parse(this.functionInText);","            $scope.currentFunction = parsedObject;","         } catch(e){","            console.log(e);","         };","      }"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":72},"end":{"row":12,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":12,"column":0},"end":{"row":19,"column":0}},"lines":["      $scope.reloadCurrentFunction = function(){","         try{","            var parsedObject = JSON.parse(this.functionInText);","            $scope.currentFunction = parsedObject;","         } catch(e){","            console.log(e);","         };"]},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":7}},"text":"      }"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":3,"column":0},"end":{"row":4,"column":0}},"nl":"\n","lines":["<<<<<<< HEAD"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":19,"column":0},"end":{"row":20,"column":0}},"nl":"\n","lines":["  .controller('MainCtrl', function ($scope, $http) {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":19,"column":0},"end":{"row":20,"column":0}},"nl":"\n","lines":["     $scope.currentFunction = {\"name\":\"each\",\"code\":\"_.each([1, 2, 3], alert);\\n=> alerts each number in turn...\\n_.each({one: 1, two: 2, three: 3}, alert);\\n=> alerts each number value in turn...\",\"signature\":\"_.each(list, iterator, [context])\",\"description\":\"Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists, and returns the original list for chaining.\"};"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":644},"end":{"row":6,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":671}},"text":"     $scope.currentFunction = {\"name\":\"each\",\"code\":\"_.each([1, 2, 3], alert);\\n=> alerts each number in turn...\\n_.each({one: 1, two: 2, three: 3}, alert);\\n=> alerts each number value in turn...\",\"signature\":\"_.each(list, iterator, [context])\",\"description\":\"Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists, and returns the original list for chaining.\"};"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":4,"column":0},"end":{"row":6,"column":0}},"nl":"\n","lines":["     $scope.currentFunction = ","   {\"name\":\"each\",\"code\":\"_.each([1, 2, 3], alert);\\n=> alerts each number in turn...\\n_.each({one: 1, two: 2, three: 3}, alert);\\n=> alerts each number value in turn...\",\"signature\":\"_.each(list, iterator, [context])\",\"description\":\"Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists, and returns the original list for chaining.\"};"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":7},"end":{"row":8,"column":8}},"text":""},{"action":"insertText","range":{"start":{"row":8,"column":7},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":6}},"text":"      "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":7},"end":{"row":18,"column":8}},"text":""},{"action":"insertText","range":{"start":{"row":18,"column":7},"end":{"row":19,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":6}},"text":"      "}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":51,"column":0},"end":{"row":52,"column":0}},"nl":"\n","lines":[">>>>>>> new feature add resource"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":12}},"text":"<<<<<<< HEAD"},{"action":"insertText","range":{"start":{"row":3,"column":12},"end":{"row":4,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":7}},"text":"======="},{"action":"insertText","range":{"start":{"row":12,"column":7},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":13,"column":0},"end":{"row":40,"column":0}},"lines":["  .controller('MainCtrl', function ($scope, $http) {","     $scope.currentFunction = {\"name\":\"each\",\"code\":\"_.each([1, 2, 3], alert);\\n=> alerts each number in turn...\\n_.each({one: 1, two: 2, three: 3}, alert);\\n=> alerts each number value in turn...\",\"signature\":\"_.each(list, iterator, [context])\",\"description\":\"Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists, and returns the original list for chaining.\"};","     $scope.getYear = function(){","        var now = moment($scope.currentResource.date);","        return now.format(\"YYYY\");","     }","     $scope.getTimeInCiteFormat = function(){","        var now = moment($scope.currentResource.date);","        console.log($scope.currentResource.date);","        return now.format(\"Do MMM. YYYY\");","     }","     var currentDate = Date().toString(); ","     $scope.currentResource = {\"author\": \"rain\", title : \"Awesome Resource\", \"date\": currentDate, \"url\": \"http://google.com\" } ","      $scope.toJSON = function(object){","         return JSON.stringify(object);","      }","      $scope.resourceInText = '{\"name\": \"load function...\"}';","      $scope.reloadCurrentResource = function(){","         try{","            var parsedObject = JSON.parse(this.resourceInText);","            $scope.currentResource = parsedObject;","         } catch(e){","            console.log(e);","         };","      }","      $scope.functionInText = '{\"name\": \"kaka\"}';",">>>>>>> e330ed4a7b8bd9b4de686dbca11b50173fddaf08"]},{"action":"insertText","range":{"start":{"row":48,"column":0},"end":{"row":48,"column":12}},"text":"<<<<<<< HEAD"},{"action":"insertText","range":{"start":{"row":48,"column":12},"end":{"row":49,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":72,"column":7},"end":{"row":73,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":73,"column":0},"end":{"row":74,"column":0}},"lines":["======="]},{"action":"insertText","range":{"start":{"row":74,"column":0},"end":{"row":74,"column":48}},"text":">>>>>>> e330ed4a7b8bd9b4de686dbca11b50173fddaf08"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":48,"column":0},"end":{"row":49,"column":0}},"nl":"\n","lines":["<<<<<<< HEAD"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":39,"column":0},"end":{"row":40,"column":0}},"nl":"\n","lines":[">>>>>>> e330ed4a7b8bd9b4de686dbca11b50173fddaf08"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":71,"column":0},"end":{"row":73,"column":0}},"nl":"\n","lines":["=======",">>>>>>> e330ed4a7b8bd9b4de686dbca11b50173fddaf08"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":3,"column":0},"end":{"row":4,"column":0}},"nl":"\n","lines":["<<<<<<< HEAD"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":3,"column":0},"end":{"row":5,"column":0}},"nl":"\n","lines":["  .controller('MainCtrl', function ($scope) {","     $scope.currentFunction = {\"name\":\"each\",\"code\":\"_.each([1, 2, 3], alert);\\n=> alerts each number in turn...\\n_.each({one: 1, two: 2, three: 3}, alert);\\n=> alerts each number value in turn...\",\"signature\":\"_.each(list, iterator, [context])\",\"description\":\"Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists, and returns the original list for chaining.\"};"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":9,"column":0},"end":{"row":10,"column":0}},"nl":"\n","lines":["======="]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":4,"column":0},"end":{"row":9,"column":0}},"nl":"\n","lines":["      $scope.toJSON = function(object){","         return JSON.stringify(object);","      }","      ","      $scope.functionInText = '{\"name\": \"paste your function here...\"}';"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":671},"end":{"row":6,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":6,"column":0},"end":{"row":10,"column":0}},"lines":["      $scope.toJSON = function(object){","         return JSON.stringify(object);","      }","      "]},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":72}},"text":"      $scope.functionInText = '{\"name\": \"paste your function here...\"}';"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":34,"column":0},"end":{"row":35,"column":0}},"nl":"\n","lines":["      $scope.functionInText = '{\"name\": \"kaka\"}';"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":34},"end":{"row":3,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":12}},"text":"<<<<<<< HEAD"},{"action":"insertText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":7}},"text":"======="},{"action":"insertText","range":{"start":{"row":26,"column":7},"end":{"row":27,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":27,"column":0},"end":{"row":44,"column":0}},"lines":["  .controller('MainCtrl', function ($scope, $http) {","     $scope.currentFunction = {\"name\":\"each\",\"code\":\"_.each([1, 2, 3], alert);\\n=> alerts each number in turn...\\n_.each({one: 1, two: 2, three: 3}, alert);\\n=> alerts each number value in turn...\",\"signature\":\"_.each(list, iterator, [context])\",\"description\":\"Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists, and returns the original list for chaining.\"};","     $scope.getYear = function(){","        var now = moment($scope.currentResource.date);","        return now.format(\"YYYY\");","     }","     $scope.getTimeInCiteFormat = function(){","        var now = moment($scope.currentResource.date);","        console.log($scope.currentResource.date);","        return now.format(\"Do MMM. YYYY\");","     }","     var currentDate = Date().toString(); ","     $scope.currentResource = {\"author\": \"rain\", title : \"Awesome Resource\", \"date\": currentDate, \"url\": \"http://google.com\" } ","      $scope.toJSON = function(object){","         return JSON.stringify(object);","      }",">>>>>>> e330ed4a7b8bd9b4de686dbca11b50173fddaf08"]},{"action":"insertText","range":{"start":{"row":53,"column":0},"end":{"row":53,"column":12}},"text":"<<<<<<< HEAD"},{"action":"insertText","range":{"start":{"row":53,"column":12},"end":{"row":54,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":54,"column":0},"end":{"row":57,"column":0}},"lines":["=======","      $scope.functionInText = '{\"name\": \"kaka\"}';",">>>>>>> e330ed4a7b8bd9b4de686dbca11b50173fddaf08"]},{"action":"insertText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":12}},"text":"<<<<<<< HEAD"},{"action":"insertText","range":{"start":{"row":65,"column":12},"end":{"row":66,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":89,"column":7},"end":{"row":90,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":90,"column":0},"end":{"row":91,"column":0}},"lines":["======="]},{"action":"insertText","range":{"start":{"row":91,"column":0},"end":{"row":91,"column":48}},"text":">>>>>>> e330ed4a7b8bd9b4de686dbca11b50173fddaf08"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":65,"column":0},"end":{"row":66,"column":0}},"nl":"\n","lines":["<<<<<<< HEAD"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":56,"column":0},"end":{"row":57,"column":0}},"nl":"\n","lines":[">>>>>>> e330ed4a7b8bd9b4de686dbca11b50173fddaf08"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":88,"column":0},"end":{"row":90,"column":0}},"nl":"\n","lines":["=======",">>>>>>> e330ed4a7b8bd9b4de686dbca11b50173fddaf08"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":3,"column":0},"end":{"row":4,"column":0}},"nl":"\n","lines":["<<<<<<< HEAD"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":25,"column":0},"end":{"row":26,"column":0}},"nl":"\n","lines":["======="]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":25,"column":0},"end":{"row":26,"column":0}},"nl":"\n","lines":["  .controller('MainCtrl', function ($scope, $http) {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":25,"column":0},"end":{"row":26,"column":0}},"nl":"\n","lines":["     $scope.currentFunction = {\"name\":\"each\",\"code\":\"_.each([1, 2, 3], alert);\\n=> alerts each number in turn...\\n_.each({one: 1, two: 2, three: 3}, alert);\\n=> alerts each number value in turn...\",\"signature\":\"_.each(list, iterator, [context])\",\"description\":\"Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists, and returns the original list for chaining.\"};"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":39,"column":0},"end":{"row":40,"column":0}},"nl":"\n","lines":[">>>>>>> e330ed4a7b8bd9b4de686dbca11b50173fddaf08"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":7},"end":{"row":38,"column":8}},"text":""},{"action":"insertText","range":{"start":{"row":38,"column":7},"end":{"row":39,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":39,"column":0},"end":{"row":39,"column":6}},"text":"      "}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":49,"column":0},"end":{"row":51,"column":0}},"nl":"\n","lines":["<<<<<<< HEAD","======="]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":48,"column":7},"end":{"row":48,"column":8}},"text":""},{"action":"insertText","range":{"start":{"row":48,"column":7},"end":{"row":49,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":49,"column":0},"end":{"row":49,"column":6}},"text":"      "}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":32},"end":{"row":13,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1406776992735,"hash":"d61a3a2ea75a1c731d2b90a537ad8be1bba1179c"}