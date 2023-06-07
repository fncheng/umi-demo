import { Request, Response } from '@umijs/deps/compiled/express';
import mock from 'mockjs';

// mock.setup({
//   timeout: 500,
// });

const getList = mock.mock({
  code: 200,
  body: {
    'content|22': [
      {
        'id|+1': 1,
        checkName: '@name',
        ip: '@ip',
        'gender|1': [0, 1],
        'number|1-100': 1,
      },
    ],
  },
});

console.log('getList: ', getList);

export default {
  'GET /api/getlist': (req: Request, res: Response) =>
    setTimeout(() => {
      res.send(getList);
    }, 500),
};
