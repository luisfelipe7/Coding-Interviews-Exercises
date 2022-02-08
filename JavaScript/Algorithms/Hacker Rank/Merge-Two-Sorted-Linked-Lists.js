// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    // Creating the new SinglyLinkedListNode that will be in charge of keeping the merged values
    var head3 = new SinglyLinkedListNode();

    // Evaluating cases head1 or/and head2 null SETTING THE HEAD3
    if (head1 == null && head2 == null) { // head1 is null and head2 is null
        head3 = null;
    } else {
        if (head1 == null && head2 != null) { // Only head1 is null
            head3 = head2;
        } else {
            if (head1 != null && head2 == null) { // Only head2 is null
                head3 = head1;
            } else {
                // Creating a tempNode for the list 
                var tempNode;
                var temp2Node;
                tempNode = new SinglyLinkedListNode();

                // head1 and head2 are not null
                if (head1.data > head2.data) { // head1 value is bigger
                    head3.data = head2.data;
                    head3.next = tempNode;
                    head2 = head2.next;
                } else { // head1 is smaller or equal
                    head3.data = head1.data;
                    head3.next = tempNode;
                    head1 = head1.next;
                }
                                
                // Comparing
                while (head1 != null || head2 != null) {
                    temp2Node = tempNode; // Copying the reference of actual
                    tempNode = new SinglyLinkedListNode(); // Creating new next

                    if (head1 == null) {
                        temp2Node.data = head2.data; // Copying the data 
                        temp2Node.next = tempNode; // Putting the new next
                        head2 = head2.next; // Moving the reference
                    } else {
                        if (head2 == null) {
                            temp2Node.data = head1.data; // Copying the data 
                            temp2Node.next = tempNode; // Putting the new next
                            head1 = head1.next; // Moving the reference
                        } else {
                            if (head2.data < head1.data) {
                                temp2Node.data = head2.data; // Copying the data 
                                temp2Node.next = tempNode; // Putting the new next
                                head2 = head2.next; // Moving the reference
                            } else {
                                temp2Node.data = head1.data; // Copying the data 
                                temp2Node.next = tempNode; // Putting the new next
                                head1 = head1.next; // Moving the reference
                            }
                        }
                    }
                }
                temp2Node.next = null;

            }

        }
    }

    return head3;
}

function printList(head) {
    let elements = null;
    if (head != null) {
        if (head.next == null) {
            elements = head.data + ' ';
        }else{
            elements = head.data + ' ';
            while (head.next != null) {
                head = head.next;
                elements += head.data+' ';
            }
        }
    }

    console.log(elements);
}
