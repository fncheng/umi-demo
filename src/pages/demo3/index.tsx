import { RefObject, memo, useMemo, useRef, useState } from 'react';

interface BaseButtonProps {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}

const BaseButton = memo(({ number, setNumber }: BaseButtonProps) => {
  console.log('----子组件重新渲染----');
  return (
    <>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
    </>
  );
});

const fetchData = () =>
  new Promise((resolve, reject) => {
    resolve(333)
  });

export default function Main() {
  const [number, setNumber] = useState(0);
  const node = useRef<HTMLSpanElement>(null);

  const CopyToClipboard = (ref: RefObject<HTMLElement>) => {
    const inputElement: HTMLInputElement = document.createElement('input');
    inputElement.value = ref.current?.innerText || '';
    document.body.append(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.remove();
    alert('copyed');
  };

  try {
    fetchData()
      .then((res) => {
        console.log('success', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
    throw new Error('333');
  } catch (error) {
    console.error('error: ', error);
  }

  return (
    <div>
      <span className="copy" ref={node} onClick={() => CopyToClipboard(node)}>
        {number}
      </span>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        btn
      </button>
      <BaseButton number={number} setNumber={setNumber} />
      {/* {BaseButton} */}
    </div>
  );
}
