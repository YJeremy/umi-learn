
import { Effect, Reducer,Subscription,request } from 'umi';


export interface HeroModelState {
  name: string;
  heros:[];
}


export interface HeroModelType {
  namespace: 'hero';
  state: HeroModelState;
  effects: {
    query: Effect;
    fetch:Effect;
  };

  reducers: {
    save: Reducer<HeroModelState>;
  };

  subscriptions:{setup:Subscription};
}


const HeroModel: HeroModelType = {

  namespace: 'hero',
  state: {
    heros:[],
  },

  effects: {
    *query({ payload }, { call, put }) {

    },

 *fetch({ type, payload }, { put, call, select }) {
     let data;
     // data = yield request('/web201605/js/herolist.json');//使用代理了服务器前面部分，请求后面的地址即可
     //console.log('123')

     const localdata = [
        {
          ename: 105,
          cname: '廉颇',
          title: '正义爆轰',
          new_type: 0,
          hero_type: 3,
          skin_name: '正义爆轰|地狱岩魂',
        },
        {
          ename: 106,
          cname: '小乔',
          title: '恋之微风',
          new_type: 0,
          hero_type: 2,
          skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
        },
      ];

      yield put({
        type: 'save',
        payload: {
          heros:data||localdata,
        },
      });
    },
  },

  reducers: {

    save(state, action) {
      return {

        ...state,

        ...action.payload,
      };
    },
  },

  subscriptions:{
    setup({ dispatch, history }) {
            return history.listen(({ pathname, /*query*/ }) => {
                if (pathname === '/hero') {
                    dispatch({
                        type: 'fetch'
                    })
                }
            });
        }
  },
};

export default HeroModel;
