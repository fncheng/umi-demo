import { RefObject } from 'react';

/**
 * 给ProTable的body部分设置滚动条
 * @param {number} options.extraHeight 表格body底部到可视区域的距离（默认为 70）
 * @param {RefObject} options.ref  ProTable组件ref
 * @returns {string} 返回表格的垂直滚动高度
 * 
 * @throws {Error} 如果无法计算出垂直滚动高度，可能是ProTable组件未设置scroll属性
 */
export const getTableScroll = ({
  extraHeight = 70,
  ref,
}: {
  extraHeight?: number;
  ref: RefObject<HTMLDivElement>;
}) => {
  const el = ref.current?.querySelector('div.ant-table-body');
  console.log('el: ', el);
  if (el) {
    const { top }: DOMRect = el!.getBoundingClientRect();
    const height = `calc(100vh - ${top + extraHeight}px)`;
    const oldStyle = el?.getAttribute('style');
    const newStyle = `min-height: ${height}`;
    el?.setAttribute('style', `${oldStyle} ${newStyle}`);
    return height;
  } else throw new Error('ProTable必须设置scroll属性');
};
