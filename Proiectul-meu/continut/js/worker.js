var produse = []
onmessage = (a) => {
    console.log('Message received from main script');
    console.log(a.data);
    console.log('Posting message back to main script');
    postMessage(a.data);
}
