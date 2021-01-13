/* Alyssa was asked to write an implementation of a rolling buffer.
You can add and remove elements from a rolloing buffer. However,
once the buffer becomes full, any new elements will displace the oldest
elements in the buffer.

She wrote two implementations of the code for adding elements to the buffer.
In presenting the code to her team leader, she said "Take your pick. Do you
prefer push() or concat() for modifying the buffer?"

Is there a difference between these implementations, other than the method
she used to add an element to the buffer?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

Yes, push() will mutate the argument, that is, the buffer, whereas concat()
won't cause a mutated return */