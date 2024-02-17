import AssisChat from "../public/assischat.png";
import lofyee from "../public/lofyee.png";
import subnooc from "../public/subnooc.png";
import quwu from "../public/quwu.png";
import youminco from '../public/youminco.png'

export const PROJECTS = [
  {
    name: '游民CO',
    summary: '数字游民资讯网站',
    image: youminco,
    link: 'https://youmin.co',
    color: 'blue',
    primary: true,
  },
  {
    name: "趣物",
    summary: "收集有趣物品的网站",
    image: quwu,
    link: "https://quwu.io",
    color: "amber",
    primary: true,
  },
  {
    name: "AssisChat",
    summary: "ChatGPT 客户端",
    image: AssisChat,
    link: "https://assischat.com",
    color: "green",
    primary: true,
  },
  {
    name: "Lofyee",
    summary: "Lo-Fi 音乐播放器",
    image: lofyee,
    link: "https://lofyee.com",
    color: "rose",
    primary: true,
  },
  {
    name: "主观世界",
    summary: "分享我思考的博客",
    image: subnooc,
    link: "https://subnooc.com",
    color: "red",
    primary: false,
  },
  {
    name: "OhMyGPT",
    summary: "一键部署自己 ChatGPT 应用",
    link: "https://github.com/assischat/ohmygpt",
    color: "green",
    primary: false,
  },
  {
    name: "PH Summary",
    summary: "Product Hunt 每日摘要",
    link: "https://twitter.com/ph_summary",
    color: "orange",
    primary: false,
  },
];
