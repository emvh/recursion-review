// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className) {
//   // create a result container:
//   var result = [];
//   // write a helper function to search nodes;
//   var searchNodes = function(node) {
//     if ((node.classList) && (node.classList.contains(className))) {
//       //  push to the result array;
//       result.push(node);
//      }
//     // iterate through children to find nodes with className;
//     if ( node.childNodes) {
//       for ( var i = 0 ; i < node.childNodes.length; i++) {
//         searchNodes(node.childNodes[i])
//       }
//     }
//   }
//   //  call a helper function
//   searchNodes(document.body);
//   //  return the result;
//   return result;
//   // your code here
// };



var getElementsByClassName = function(className, node) {
  var nodes = node || document.body;
  // create a result container:
  var result = [];
  // write a helper function to search nodes;
    if ( nodes.className.split(' ').indexOf(className) != -1) {
      //  push to the result array;
      result.push(nodes);
    }
    if (nodes.children) {
      for ( var i = 0 ; i < nodes.children.length; i++) {
        result = result.concat(getElementsByClassName(className, nodes.children[i]))
      }
    }
    return result;
};
