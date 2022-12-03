1. Streams are useful for continually arriving or changing information, such as user input or network request / data reception.

2. Personally, I find streams easier to understand than promises. Streams give the benefit of being able to break a long response into smaller chunks that can be used and processed while the program waits to receive the other pieces of information. 

3. One of the tasks can change the state in a way not expected and taint the other two tasks' outputs. Ideally, shared items should be passed intuitively not shared gloablly