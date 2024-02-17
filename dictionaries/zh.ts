const dictionary =  {
  meta: {
    websiteName: 'Nooc 的主页',
    motto: '游离于存在与虚无间的理想主义者',
    bio: `
一个人。

男的,
喜欢看书听歌写代码。

听歌喜欢电台随机;
电影喜欢追着导演看;
看书偏爱小说，有时也看哲史;
游戏喜欢买但不爱玩。

尝试过学画画;
也买过 MIDI 键盘;
但仅此而已。

偏爱泛客户端开发;
Serverless 爱好者。
    `,
  },
  labels: {
    home: '主页',
    works: '作品',
    doing: '在做什么',
    playing: '在玩什么',
    writing: '在写什么',
    friends: '他们说',
    email: '邮箱',
    icon(label: string) {
      return `${label}的图标`
    }
  }
};

export default dictionary;