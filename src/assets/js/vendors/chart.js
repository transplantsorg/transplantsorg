// Add color theme colors to the window object so this can be used by the charts and vector maps
// Chart js

const theme = {
  primary: "var(--gk-primary)",
  secondary: "var(--gk-secondary)",
  success: "var(--gk-success)",
  info: "var(--gk-info)",
  warning: "var(--gk-warning)",
  danger: "var(--gk-danger)",
  dark: "var(--gk-dark)",
  light: "var(--gk-light)",
  white: "var(--gk-white)",
  gray100: "var(--gk-gray-100)",
  gray200: "var(--gk-gray-200)",
  gray300: "var(--gk-gray-300)",
  gray400: "var(--gk-gray-400)",
  gray500: "var(--gk-gray-500)",
  gray600: "var(--gk-gray-600)",
  gray700: "var(--gk-gray-700)",
  gray800: "var(--gk-gray-800)",
  gray900: "var(--gk-gray-900)",
  black: "var(--gk-black)",
  lightPrimary: "var(--gk-primary-subtle)",
  lightSecondary: "var(--gk-secondary-subtle)",
  lightSuccess: "var(--gk-success-subtle)",
  lightDanger: "var(--gk-danger-subtle)",
  lightWarning: "var(--gk-warning-subtle)",
  lightInfo: "var(--gk-info-subtle)",
  darkPrimary: "var(--gk-primary)",
  darkSecondary: "var(--gk-secondary)",
  darkSuccess: "var(--gk-success)",
  darkDanger: "var(--gk-danger)",
  darkWarning: "var(--gk-warning)",
  darkInfo: "var(--gk-info)",
  transparent: "transparent",
  borderColor: "var(--gk-border-color)",
};

// Add theme to the window object
window.theme = theme;

(function () {
  // Earning chart

  if (document.getElementById("earning")) {
    var options = {
      series: [
        {
          name: "Current Month",
          data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38],
        },
      ],
      labels: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      chart: {
        fontFamily: "$font-family-base",
        height: "280px",
        type: "line",

        toolbar: {
          show: false,
        },
      },
      colors: [window.theme.primary],
      stroke: {
        width: 4,
        curve: "smooth",
        colors: "#754ffe",
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: true,
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: "13px",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (e) {
            return e + "k";
          },
          style: {
            fontSize: "13px",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
          offsetX: -15,
        },
        tickAmount: 3,
        min: 10,
        max: 40,
      },
      grid: {
        borderColor: window.theme.borderColor,
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetY: -50,
        fontSize: "16px",
        markers: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: window.theme.white,
          fillColors: undefined,
          radius: 12,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 0,
          vertical: 20,
        },
      },
      tooltip: {
        theme: "light",
        marker: {
          show: true,
        },
        x: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            legend: {
              offsetY: -30,
            },
          },
        },
      ],
    };
    var chart = new ApexCharts(document.querySelector("#earning"), options);
    chart.render();
  }

  // Earning second

  if (document.getElementById("earningTwo")) {
    var options = {
      series: [
        {
          name: "Current Month",
          data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38],
        },
      ],
      labels: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      chart: {
        fontFamily: "$font-family-base",
        height: "280px",
        type: "line",
        toolbar: {
          show: false,
        },
      },
      colors: [window.theme.primary],
      stroke: {
        width: 4,
        curve: "smooth",
        colors: "#754ffe",
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },

        crosshairs: {
          show: true,
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: "13px",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (e) {
            return e + "k";
          },
          style: {
            fontSize: "13px",
            fontWeight: 400,
            colors: [window.theme.primary],
          },
          offsetX: -15,
        },
        tickAmount: 3,
        min: 10,
        max: 40,
      },
      grid: {
        borderColor: window.theme.borderColor,
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetY: -50,
        fontSize: "16px",
        markers: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: window.theme.white,
          fillColors: undefined,
          radius: 12,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 0,
          vertical: 20,
        },
      },
      tooltip: {
        theme: "light",
        marker: {
          show: true,
        },
        x: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            legend: {
              offsetY: -30,
            },
          },
        },
      ],
    };
    var chart = new ApexCharts(document.querySelector("#earningTwo"), options);
    chart.render();
  }

  // Order chart

  if (document.getElementById("order")) {
    var options = {
      series: [
        {
          name: "Days",
          data: [0, 3, 0.5, 3.5, 1, 2.5, 0.5, 4, 1.4, 4.5, 2.5, 4.8],
        },
      ],
      labels: ["12 Jan", "14 Jan", "16 Jan", "18 Jan", "20 Jan", "22 Jan", "24 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
      chart: {
        fontFamily: "$font-family-base",
        height: "280px",
        type: "line",
        toolbar: {
          show: false,
        },
      },
      colors: [window.theme.primary],
      stroke: {
        width: 4,
        curve: "smooth",
        colors: "#754ffe",
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: true,
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: "13px",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (val, index) {
            return val.toFixed(0);
          },
          style: {
            fontSize: "13px",
            fontWeight: 400,
            colors: [window.theme.gray500],
          },
          offsetX: -20,
        },
        tickAmount: 3,
        min: 0,
        max: 5,
      },
      grid: {
        borderColor: window.theme.borderColor,
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: -10,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetY: -50,
        fontSize: "16px",
        markers: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: window.theme.white,
          fillColors: undefined,
          radius: 12,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 0,
          vertical: 20,
        },
      },
      tooltip: {
        theme: "light",
        marker: {
          show: true,
        },
        x: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            legend: {
              offsetY: -30,
            },
          },
        },
      ],
    };

    var chart1 = new ApexCharts(document.querySelector("#order"), options);
    chart1.render();
  }

  // Traffic
  if (document.getElementById("traffic")) {
    var options = {
      dataLabels: {
        enabled: false,
      },
      series: [44, 55, 41],
      labels: ["Direct", "Referral", "Organic"],
      colors: [window.theme.darkPrimary, window.theme.primary, window.theme.lightPrimary],
      chart: {
        width: 392,
        type: "donut",
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "78%",
          },
        },
      },
      legend: {
        labels: {
          colors: [window.theme.gray500],
          useSeriesColors: false,
        },
        position: "bottom",
        fontFamily: "inter",
        fontWeight: 500,
        fontSize: "14px",
        markers: {
          width: 8,
          height: 8,
          strokeWidth: 0,
          strokeColor: window.theme.white,
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
      },
      tooltip: {
        theme: "light",
        marker: {
          show: true,
        },
        x: {
          show: false,
        },
      },
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
      },
      stroke: {
        show: true,

        colors: [window.theme.transparent],
      },
    };

    var chart = new ApexCharts(document.querySelector("#traffic"), options);
    chart.render();
  }
  // Order column
  if (document.getElementById("orderColumn")) {
    var options = {
      series: [
        {
          data: [4, 6, 5, 3, 5, 6, 8, 9],
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 272,
      },
      colors: window.theme.primary,
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "12%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
      grid: {
        borderColor: window.theme.borderColor,
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        categories: ["1 Jun", "9 Jun", "16 Jun", "18 Jun", "19 Jun", "22 Jun", "24 Jun", "26 Jun"],
        axisBorder: {
          show: false,
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: "14px",
            fontWeight: 400,
            colors: window.theme.gray500,
          },
        },
      },
      grid: {
        borderColor: window.theme.borderColor,
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: -10,
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: "rounded",
            columnWidth: "80%",
          },
        },
        labels: {
          style: {
            fontSize: "13px",
            fontWeight: 400,
            colors: "#a8a3b9",
          },
          offsetX: -10,
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " sales ";
          },
        },
        marker: {
          show: true,
        },
      },
    };
    var chart = new ApexCharts(document.querySelector("#orderColumn"), options);
    chart.render();
  }

  // Total earning
  if (document.getElementById("totalEarning")) {
    var options = {
      series: [
        {
          data: [50, 80, 5, 90, 12, 150, 12, 80, 150],
        },
      ],
      chart: {
        width: 130,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: [window.theme.success],
        width: 2,
        dashArray: 0,
      },
      grid: {
        show: false,
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
    };

    var chart = new ApexCharts(document.querySelector("#totalEarning"), options);
    chart.render();
  }
  // Payout chart
  if (document.getElementById("payoutChart")) {
    var options = {
      series: [
        {
          name: "Inflation",
          data: [40, 20, 50, 80, 65],
        },
      ],
      chart: {
        height: 150,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      colors: [window.theme.lightPrimary],
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          endingShape: "flat",
          columnWidth: "65%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: [],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },

        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        show: false,
      },
    };

    var chart = new ApexCharts(document.querySelector("#payoutChart"), options);
    chart.render();
  }
  if (document.getElementById("userChart")) {
    var options = {
      chart: {
        height: 60,
        type: "area",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      colors: [window.theme.primary],
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: [window.theme.primary],
          shadeIntensity: 0.9,
          opacityFrom: 0.5,
          opacityTo: 0.04,
          stops: [0, 80, 100],
        },
      },
      series: [
        {
          name: "User",
          data: [28, 40, 36, 52, 38, 60, 55],
        },
      ],
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: [
        {
          y: 0,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
      tooltip: {
        x: {
          show: false,
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#userChart"), options);
    chart.render();
  }
  if (document.getElementById("userChartExample")) {
    var options = {
      chart: {
        height: 60,
        type: "area",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
          },
        },
      },
      colors: [window.theme.danger],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: [window.theme.danger],
          shadeIntensity: 0.7,
          opacityFrom: 0.5,
          opacityTo: 0.04,
          stops: [0, 80, 100],
        },
      },
      series: [
        {
          name: "User",
          data: [28, 40, 36, 52, 38, 60, 55],
        },
      ],
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: [
        {
          y: 0,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
      tooltip: {
        x: {
          show: false,
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#userChartExample"), options);
    chart.render();
  }

  // visitor chart
  if (document.getElementById("visitorChart")) {
    var options = {
      chart: {
        height: 60,
        type: "area",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
          },
        },
      },
      colors: [window.theme.success],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        colors: [window.theme.success],
        type: "gradient",
        gradient: {
          type: "vertical",
          gradientToColors: [window.theme.success],
          shadeIntensity: 0.7,
          opacityFrom: 0.5,
          opacityTo: 0.04,
          stops: [0, 80, 100],
        },
      },
      series: [
        {
          name: "User",
          data: [28, 40, 36, 52, 38, 60, 55],
        },
      ],
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: [
        {
          y: 0,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
      tooltip: {
        x: {
          show: false,
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#visitorChart"), options);
    chart.render();
  }
  // bounceChart
  if (document.getElementById("bounceChart")) {
    var options = {
      chart: {
        height: 60,
        type: "line",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
          },
        },
      },
      colors: [window.theme.darkWarning],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 4,
      },
      markers: {
        size: 4,
        hover: {
          size: 6,
          sizeOffset: 3,
        },
      },
      series: [
        {
          name: "Bonus Rate",
          data: [28, 40, 36, 52, 38, 60, 55],
        },
      ],
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: [
        {
          y: 0,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
      tooltip: {
        x: {
          show: false,
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#bounceChart"), options);
    chart.render();
  }
  if (document.getElementById("sessionChart")) {
    var options = {
      series: [
        {
          name: "Session Duration",
          data: [600, 1000, 400, 2000, 500, 900, 2500, 1800, 3800],
          colors: [window.theme.primary],
        },
        {
          name: "Page Views",
          data: [1000, 2000, 800, 1200, 300, 1900, 1600, 2000, 1000],
        },
        {
          name: "Total Visits",
          data: [2200, 1000, 3400, 900, 500, 2500, 3000, 1000, 2500],
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 400,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [4, 3, 3],
        curve: "smooth",
        dashArray: [0, 5, 4],
      },

      legend: {
        show: false,
      },
      colors: [window.theme.primary, window.theme.success, window.theme.warning],
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
        labels: {
          style: {
            fontSize: "12px",
            fontFamily: "Inter",
            cssClass: "apexcharts-xaxis-label",
            colors: window.theme.gray500,
          },
        },
        axisBorder: {
          show: true,
          color: window.theme.borderColor,
          height: 0,
          width: "100%",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: window.theme.borderColor,
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "12px",
            fontFamily: "Inter",
            cssClass: "apexcharts-xaxis-label",
          },
          offsetX: -12,
          offsetY: 0,
        },
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
        ],
      },

      grid: {
        borderColor: window.theme.borderColor,
      },
    };

    var chart = new ApexCharts(document.querySelector("#sessionChart"), options);
    chart.render();
  }

  // support-chart
  if (document.getElementById("support-chart1")) {
    var options = {
      chart: {
        type: "bar",
        height: 302,
        sparkline: {
          enabled: true,
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "darken",
            value: 0.55,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "darken",
            value: 0.55,
          },
        },
      },
      colors: [window.theme.primary],
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: "50%",
        },
      },
      series: [
        {
          data: [25, 66, 41, 70, 63, 25, 44, 22, 36, 19, 54, 44, 32, 36, 29, 54, 25, 66, 41, 65, 63, 25, 44, 12, 36, 39, 25, 44, 42, 36, 54],
        },
      ],
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return "Active User";
            },
          },
        },
        marker: {
          show: false,
        },
      },
    };
    new ApexCharts(document.querySelector("#support-chart1"), options).render();
  }

  // location map
  if (document.getElementById("locationmap")) {
    const map = new jsVectorMap({
      map: "world",
      selector: "#locationmap",
      zoomOnScroll: true,
      zoomButtons: true,
      markersSelectable: true,
      markers: [
        { name: "United Kingdom", coords: [53.613, -11.6368] },
        { name: "India", coords: [20.7504374, 73.7276105] },
        { name: "United States", coords: [37.2580397, -104.657039] },
        { name: "Australia", coords: [-25.0304388, 115.2092761] },
      ],
      markerStyle: {
        initial: { fill: [window.theme.primary] },
      },
      markerLabelStyle: {
        initial: {
          fontFamily: "Inter",
          fontSize: 13,
          fontWeight: 500,
          cursor: "default",
          fill: [window.theme.dark],
        },
      },
      labels: {
        markers: {
          render: (marker) => marker.name,
        },
      },
    });
  }

  // trafic donut chart
  if (document.getElementById("trafficDountChart")) {
    var options = {
      series: [60, 55, 12, 17],
      labels: ["Organic Search", "Direct", "Refferrals", "Social Media"],
      colors: [window.theme.primary, window.theme.success, window.theme.danger, window.theme.warning],
      chart: {
        type: "donut",
        height: 260,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "50%",
          },
        },
      },
      stroke: {
        width: 2,
        colors: [window.theme.transparent],
      },
    };

    var chart = new ApexCharts(document.querySelector("#trafficDountChart"), options);
    chart.render();
  }

  if (document.getElementById("operatingSystem")) {
    var options = {
      series: [55, 88, 80, 75],
      labels: ["Window", "macOS", "Linux", "Android"],
      chart: {
        type: "polarArea",
        height: 350,
      },

      colors: [window.theme.danger, window.theme.success, window.theme.primary, window.theme.info],
      legend: {
        show: false,
      },
      stroke: {
        colors: [window.theme.borderColor],
      },
      fill: {
        opacity: 0.9,
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 1,
            strokeColor: [window.theme.borderColor],
          },
          spokes: {
            strokeWidth: 1,
            connectorColors: [window.theme.borderColor, window.theme.borderColor, window.theme.borderColor, window.theme.borderColor],
          },
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#operatingSystem"), options);
    chart.render();
  }

  // expense chart
  if (document.getElementById("expenseChart")) {
    var options = {
      series: [9000, 4500, 9030, 6800, 2400, 8320],
      labels: ["Design", "Sass Service", "Development", "SEO", "Entertainment", "Marketing"],
      colors: [window.theme.warning, window.theme.info, window.theme.danger, window.theme.primary, window.theme.info, window.theme.success],
      chart: {
        type: "donut",
        height: 450,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          startAngle: 55,
          endAngle: 360,
          expandOnClick: false,
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: 26,
              },

              value: {
                show: true,
                fontSize: "42px",
                color: undefined,
                offsetY: -20,
                fontWeight: "700",
                formatter: function (val) {
                  return "$" + val;
                },
              },
              total: {
                show: true,
                label: "Total Spent",
                fontSize: "20px",
                color: window.theme.gray400,
                fontWeight: "600",
                formatter: function (w) {
                  return (
                    "$" +
                    w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0)
                  );
                },
              },
            },
          },
        },
      },
      stroke: {
        width: 2,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              type: "donut",
              width: 290,
              height: 410,
            },
          },
        },
      ],
    };
    var chart = new ApexCharts(document.querySelector("#expenseChart"), options);
    chart.render();
  }

  // task summary chart
  if (document.getElementById("taskSummary")) {
    var options = {
      series: [
        {
          name: "Closed",
          type: "column",
          data: [12, 18, 20, 32, 19, 25, 30],
        },
        {
          name: "New",
          type: "line",
          data: [20, 32, 28, 50, 38, 35, 49],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadius: 5,
        },
      },
      markers: {
        colors: [window.theme.dark],
        fillColor: window.theme.gray200,
      },
      colors: [window.theme.lightPrimary, window.theme.primary],
      legend: {
        show: false,
      },
      stroke: {
        width: [0, 4],
        colors: [window.theme.lightPrimary],
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },

      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      xaxis: {
        labels: {
          style: {
            fontSize: "13px",
            fontWeight: 400,
            colors: window.theme.gray500,
            fontFamily: "inter",
          },
        },
        axisBorder: {
          show: true,
          color: window.theme.borderColor,
          height: 0,
          width: "100%",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: window.theme.borderColor,
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "13px",
            fontWeight: 400,
            colors: window.theme.gray500,
            fontFamily: "inter",
          },
        },
      },
      grid: {
        borderColor: window.theme.borderColor,
      },
    };

    var chart = new ApexCharts(document.querySelector("#taskSummary"), options);
    chart.render();
  }

  // section chart
  if (document.getElementById("taskSectionchart")) {
    var options = {
      series: [44, 65, 89, 75],
      chart: {
        height: 400,
        type: "radialBar",
      },
      legend: {
        show: true,
        fontSize: "14px",
        fontFamily: "Inter",
        fontWeight: 500,
        position: "bottom",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: window.theme.gray500,
          useSeriesColors: false,
        },
        markers: {
          width: 8,
          height: 8,
          offsetY: 1,
          offsetX: -2,
        },
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {},
            value: {
              fontSize: "24px",
              fontWeight: 600,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "12px",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 273;
              },
            },
          },
          track: {
            background: window.theme.borderColor,
            margin: 10,
          },
        },
      },
      labels: ["Design", "Frontend", "Development", "Issues"],
      colors: [window.theme.primary, window.theme.success, window.theme.info, window.theme.warning],
    };

    var chart = new ApexCharts(document.querySelector("#taskSectionchart"), options);
    chart.render();
  }

  // budget Expense chart
  if (document.getElementById("budgetExpenseChart")) {
    var options = {
      series: [
        {
          name: "Series 1",
          data: [90, 32, 30, 40, 100, 20],
        },
      ],
      stroke: {
        show: true,
        width: 2,
        colors: [window.theme.primary],
        dashArray: 0,
      },
      fill: {
        colors: "#754ffe",
        opacity: 0.4,
      },
      colors: [window.theme.primary],
      dataLabels: {
        enabled: true,
        background: {
          enabled: true,
          borderRadius: 2,
        },
      },
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          show: false,
        },
      },

      plotOptions: {
        radar: {
          size: 150,
          offsetX: 0,
          offsetY: 0,
          polygons: {
            strokeColors: window.theme.borderColor,
            strokeWidth: 1,
            connectorColors: window.theme.borderColor,
            fill: {
              colors: undefined,
            },
          },
        },
      },
      xaxis: {
        categories: ["Design", "SaaS Services", "Development", "SEO", "Entertainment", "Marketing"],

        labels: {
          show: true,

          style: {
            colors: [window.theme.gray400, window.theme.gray400, window.theme.gray400, window.theme.gray400, window.theme.gray400, window.theme.gray400],
            fontSize: "14px",
            fontFamily: "Inter",
            fontWeight: 600,
          },
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#budgetExpenseChart"), options);
    chart.render();
  }

  // task Wireframe chart

  if (document.querySelectorAll(".taskWireframeChart").length > 0) {
    var options = {
      series: [65],
      chart: {
        height: 40,
        width: 80,
        type: "radialBar",
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15,
        },
      },
      colors: [window.theme.success],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%",
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "11px",
              fontFamily: undefined,
              fontWeight: 600,
              color: undefined,
              offsetY: 4,
            },
            value: {
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["65%"],
    };
    var chart = new ApexCharts(document.querySelector(".taskWireframeChart"), options);
    chart.render();
  }

  // prototype chart
  if (document.querySelectorAll(".taskPrototypeChart").length > 0) {
    var options = {
      series: [75],
      chart: {
        height: 40,
        width: 80,
        type: "radialBar",
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15,
        },
      },
      colors: [window.theme.success],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%",
          },

          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "11px",
              fontFamily: undefined,
              fontWeight: 600,
              color: undefined,
              offsetY: 4,
            },
            value: {
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["75%"],
    };
    var chart = new ApexCharts(document.querySelector(".taskPrototypeChart"), options);
    chart.render();
  }

  // task Content chart
  if (document.querySelectorAll(".taskContentChart").length > 0) {
    var options = {
      series: [85],
      chart: {
        height: 40,
        width: 80,
        type: "radialBar",
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15,
        },
      },
      colors: [window.theme.success],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%",
          },

          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "11px",
              fontFamily: undefined,
              fontWeight: 600,
              color: undefined,
              offsetY: 4,
            },
            value: {
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["85%"],
    };
    var chart = new ApexCharts(document.querySelector(".taskContentChart"), options);
    chart.render();
  }

  // task Figma chart
  if (document.querySelectorAll(".taskFigmaChart").length > 0) {
    var options = {
      series: [40],
      chart: {
        height: 40,
        width: 80,
        type: "radialBar",
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15,
        },
      },
      colors: [window.theme.success],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%",
          },

          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "11px",
              fontFamily: undefined,
              fontWeight: 600,
              color: undefined,
              offsetY: 4,
            },
            value: {
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["40%"],
    };
    var chart = new ApexCharts(document.querySelector(".taskFigmaChart"), options);
    chart.render();
  }

  // task Interface chart
  if (document.querySelectorAll(".taskInterfaceChart").length > 0) {
    var options = {
      series: [35],
      chart: {
        height: 40,
        width: 80,
        type: "radialBar",
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15,
        },
      },
      colors: [window.theme.success],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%",
            background: [window.theme.success],
          },

          dataLabels: {
            showOn: "always",

            name: {
              show: true,
              fontSize: "11px",
              fontFamily: undefined,
              fontWeight: 600,
              color: window.theme.white,

              offsetY: 2,
            },
            value: {
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["35%"],
    };
    var chart = new ApexCharts(document.querySelector(".taskInterfaceChart"), options);
    chart.render();
  }

  // task status chart
  if (document.getElementById("taskStatus")) {
    var options = {
      dataLabels: {
        enabled: false,
      },
      series: [75, 25],
      labels: ["Completed", "Incomplete"],
      colors: [window.theme.primary, window.theme.info],
      chart: {
        width: 480,
        type: "donut",
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "75%",
          },
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "inter",
        fontWeight: 500,
        fontSize: "14px",
        markers: {
          width: 8,
          height: 8,
          strokeWidth: 0,
          strokeColor: window.theme.white,
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: -2,
          offsetY: 1,
        },
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
      },
      tooltip: {
        theme: "light",
        marker: {
          show: true,
        },
        x: {
          show: false,
        },
      },
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
      },
      stroke: {
        show: true,

        colors: [window.theme.transparent],
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: {
              type: "donut",
              width: 290,
              height: 410,
            },
          },
        },
      ],
    };

    var chart = new ApexCharts(document.querySelector("#taskStatus"), options);
    chart.render();
  }

  // progress chart
  if (document.getElementById("progressChart")) {
    var options = {
      series: [75],
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      colors: [window.theme.primary, window.theme.warning],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: window.theme.white,
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: window.theme.white,
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            showOn: "always",

            name: {
              show: false,
            },
            value: {
              formatter: function (val) {
                return parseInt(val) + "%";
              },
              color: window.theme.dark,
              fontSize: "48px",
              fontWeight: "700",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: [window.theme.warning],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
    };

    var chart = new ApexCharts(document.querySelector("#progressChart"), options);
    chart.render();
  }

  if (document.querySelectorAll(".resultChart").length > 0) {
    var options = {
      series: [85],
      chart: {
        height: 110,
        width: 110,
        type: "radialBar",
      },
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15,
        },
      },
      colors: [window.theme.success],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: -2,
            size: "50%",
            background: [window.theme.lightSuccess],
          },

          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "20px",
              fontFamily: undefined,
              fontWeight: 600,
              color: undefined,
              offsetY: 7,
            },
            value: {
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["85%"],
    };
    var chart = new ApexCharts(document.querySelector(".resultChart"), options);
    chart.render();
  }
})();
