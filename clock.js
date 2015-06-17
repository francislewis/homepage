	function updateClock()
		{
			Date.getMinutesTwoDigits = function()
			{
				var retval = now.getMinutes();
				if (retval < 10) return ("0" + retval.toString());
				else return retval.toString();
			}
			Date.getHoursModTwelve = function()
			{
				var retval = now.getHours();
				retval = retval%12;
				if (retval == 0) retval = 12;
				return retval;
			}
			var now = new Date(),
			time = Date.getHoursModTwelve() + ':' + Date.getMinutesTwoDigits();
			document.getElementById('time').innerHTML = ["", time].join('');
			setTimeout(updateClock, 1000);
		}
