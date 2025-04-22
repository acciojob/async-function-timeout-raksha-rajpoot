//your JS code here. If required.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleClick() {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;
  const outputDiv = document.getElementById('output');
  const delayTime = Number(delayInput);

  // Input validation
  if (!textInput || isNaN(delayTime) || delayTime < 0) {
    outputDiv.textContent = 'Please enter a valid message and a non-negative delay.';
    return;
  }

  outputDiv.textContent = '';

  await delay(delayTime);

  outputDiv.textContent = textInput;
}

document.getElementById('btn').addEventListener('click', handleClick);

