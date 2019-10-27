const MOCKED_MOVIES_DATA = [
  {
    title: '朱乐宸',
    year: '2014',
    posters: {
      thumbnail:'http://www.theme.com/2019.jpg',
      width:137,
      height: 193

    }
  }
];
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(MOCKED_MOVIES_DATA ,'utf-8'));
};
