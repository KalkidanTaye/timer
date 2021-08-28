const delay = [10, 3, 5, 15, 9];
if (delay.length === 0) {
  console.log("Please enter a valid second");
} else {
  for (const key of delay) {
    if (typeof key === "string" || key < 0) {
      console.log("Please enter a valid second");
    } else {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, delay * 1000);
    }
  }
}
