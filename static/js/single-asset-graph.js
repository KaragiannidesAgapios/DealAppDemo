

Morris.Area.prototype.fillForSeries = function(i) {
      var color;
      return "270-#0B62A4-#1E2A31";
};

Morris.Area({
    element: 'area-example',
    data: [
    { y: '2006', a: 10 },
    { y: '2007', a: 60 },
    { y: '2008', a: 50},
    { y: '2009', a: 75},
    { y: '2010', a: 50},
    { y: '2011', a: 75},
    { y: '2012', a: 95 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    fillOpacity: 0.01,
    labels: ['Series A'],
    hoverCallback: function (index, options, content, row) {
      var finalContent = $(content);
      var cpt = 0;
      $.each(row, function (n, v) {
        if (v == null) {
          $(finalContent).eq(cpt).empty();
        }
        cpt++;
      });
      return finalContent;
    }
});

Morris.Donut({
    element: "donut-example",
    data: [
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales", value: 30},
    {label: "Mail-Order Sales", value: 20}
    ],
    backgroundColor:"#1E2A31",
    fontSize: "large",
    labelColor: "#fff",
    colors: [
        "#0b62a4",
        "#548fd6",
        "#003975",
    ]
});

Morris.Donut({
    element: "donut-example1",
    data: [
    {label: "Residential", value: 12},
    {label: "Commercial", value: 30},
    {label: "Land", value: 12}
    ],
    backgroundColor:"#1E2A31",
    fontSize: "large",
    labelColor: "#1E2A31",
    colors: [
        "#0b62a4",
        "#548fd6",
        "#003975",
    ]
});

Morris.Line({
  element: 'line-example',
  data: [
    { y: 'Jan', a: 100, b: 90 },
    { y: 'Feb', a: 75,  b: 65 },
    { y: 'Mar', a: 50,  b: 40 },
    { y: 'Apr', a: 75,  b: 65 },
    { y: 'May', a: 50,  b: 40 },
    { y: 'Jun', a: 75,  b: 65 },
    { y: 'Jul', a: 100, b: 90 },
    { y: 'Aug', a: 75,  b: 65 },
    { y: 'Sept', a: 50,  b: 40 },
    { y: 'Oct', a: 75,  b: 65 },
    { y: 'Nov', a: 50,  b: 40 },
    { y: 'Dec', a: 75,  b: 65 }

  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  parseTime: false
});
