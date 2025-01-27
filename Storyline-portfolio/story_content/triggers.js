function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6UTLJHWbBRz":
        Script1();
        break;
      case "5pKFHAq2CMg":
        Script2();
        break;
      case "5Ykp1rudqJA":
        Script3();
        break;
      case "5XLm8eXspzP":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5ub5waFMy9N');
const duration = 400;
const easing = 'ease-out';
const id = '62ZhMmQoeJi';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5vfLf4itfRN');
const duration = 400;
const easing = 'ease-out';
const id = '6dl1KFawIyE';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6DSL8rDyL8m');
const duration = 400;
const easing = 'ease-out';
const id = '6BQz1iVtFDl';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6LyJAWYNwMI');
const duration = 500;
const easing = 'ease-out';
const id = '6F0lk4nYYIn';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
