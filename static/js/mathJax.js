const MathQueue = function(elementId) {
  if (!MathJax) {
    return
  }
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById(elementId)]) //这里可以用原生的js调用name,class,id。
}

export default {
  MathQueue,
}