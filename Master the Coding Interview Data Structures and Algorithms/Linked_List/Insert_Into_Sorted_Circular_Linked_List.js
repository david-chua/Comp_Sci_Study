/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if (head == null){
        let newNode = new Node(insertVal, null);
        newNode.next = newNode;
        return newNode;
    }

    let prev = head;
    let cur = head.next;
    let toInsert = false;

    while (true){
        if (prev.val <= insertVal && insertVal <= cur.val){
            toInsert = true;
        }
        else if (prev.val > cur.val){
            if (insertVal >= prev.val || insertVal <= cur.val){
                toInsert = true;
            }
        }

        if(toInsert){
            prev.next = new Node(insertVal, cur);
            return head;
        }

        prev = cur;
        cur = cur.next;

        if (prev === head)break;
    }
    prev.next = new Node(insertVal, cur);
    return head;
};
