import { convertDate } from './convertDate.js';

const scheduleTable = document.getElementById('schedule-table');

function displaySchedule(scheduleObj) {
  const accordionItems = scheduleObj.map((schedule, index) => {
    const {
      date,
      time,
      raceName,
      round,
      Circuit: {
        Location: { locality, country },
      },
      url,
    } = schedule;

    const localDate = convertDate(date, time);

    return `<tr class="table-row text-center">
      <td>${localDate}</td>
      <td>${time}</td>
      <td><a href="${url}"
              target="_blank">${raceName}</a></td>
      <td>${round}</td>
      <td>${locality}</td>
      <td>${country}</td>
  </tr>`;
  });

  scheduleTable.insertAdjacentHTML('beforeend', accordionItems.join(''));
}

export { displaySchedule };
