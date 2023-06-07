import { dynamic } from 'umi';

export default dynamic({
  loader: async function () {
    const { default: HugeA } = await import(
      /* webpackChunkName: "Huge_A" */ './AsyncComponent'
    );
    return HugeA;
  },
});
