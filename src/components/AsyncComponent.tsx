function sleep(el: JSX.Element) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(el);
    }, 3000);
  });
}

export default function AsyncComponent() {
  return sleep(<div>async component</div>);
}
