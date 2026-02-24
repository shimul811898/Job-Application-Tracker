
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer:
    getElementById - getElementById identifies one specific element by calling one file of htm

   getElementsByClassName - getElementsByClassName() selects all elements that share the same class name.

   querySelector - querySelector() selects the first element that matches a CSS selector.

   querySelectorAll → querySelectorAll() selects the all element that matches a CSS selector.

### 2. How do you create and insert a new element into the DOM?

answer:
   The process of creating and inserting new elements into the DOM in JavaScript is basically done in 3 steps: new element creating,Configure, and Append/Insert.

   ### 3. What is Event Bubbling? And how does it work?

answer:
   Event Bubbling is a method of JavaScript DOM event propagation, where when an event (e.g. click) occurs on a child element, it is first triggered on that element and then gradually propagates to its parent, grandparent elements, all the way up to the root of the DOM tree.

   ### 4. What is Event Delegation in JavaScript? Why is it useful?

answer:
   Event Delegation basically works on the concept of Event Bubbling, where when a child element is clicked, the event propagates to its parent.

   ### 5. What is the difference between preventDefault() and stopPropagation() methods?

answer:

    preventDefault() - stops the normal behavior of the element

    stopPropagation() - stops the event bubble