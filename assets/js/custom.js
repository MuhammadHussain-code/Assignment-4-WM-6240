$(document).ready(function() {
  //owl plugin
  $("#owl-demo1").owlCarousel({
    autoPlay: false,
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]
  });

  $("#owl-demo2").owlCarousel({
    autoPlay: false,
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [979, 1]
  });

  // $("#owl-demo2").owlCarousel({
  // 	navigation: false,
  // 	autoPlay: 2500,
  // 	pagination: true,
  // 	slideSpeed: 300,
  // 	paginationSpeed: 400,
  // 	singleItem: true
  // });

  $(".onlineCoursesScroller").slimScroll({
    height: "525",
    distance: "15px",
    color: "#FFBB00",
    railVisible: true,
    railColor: "#000",
    railDraggable: true,
    axis: "x",
    opacity: 1,
    alwaysVisible: true
  });

  $(".ourDemosScroller").slimScroll({
    height: "375",
    distance: "15px",
    color: "#FFBB00",
    railVisible: true,
    railColor: "#000",
    railDraggable: true,
    axis: "x",
    opacity: 1,
    alwaysVisible: true
  });

  // metro menu func
  document
    .querySelector(".openMetroMenu")
    .addEventListener("click", function() {
      if (!$(".metroMenuContainer").is(":visible")) {
        $(".metroMenuContainer").slideDown();
        $("body").css("overflow", "hidden");
      } else {
        $(".metroMenuContainer").slideUp();
        $("body").css("overflow", "visible");
      }
      this.classList.toggle("active");
    });
  $(".closeMetroMenu").click(function() {
    $(".metroMenuContainer").slideUp();
    $("body").css("overflow", "visible");
  });
  document.querySelector(".openLogIn").addEventListener("click", function() {
    if (!$(".LoginMenuContainer").is(":visible")) {
      $(".LoginMenuContainer").slideDown();
      $("body").css("overflow", "hidden");
    } else {
      $(".LoginMenuContainer").slideUp();
      $("body").css("overflow", "visible");
    }
    this.classList.toggle("active");
  });

  $(".closeLoginMenu").click(function() {
    $(".LoginMenuContainer").slideUp();
    $("body").css("overflow", "visible");
  });

  document
    .querySelector(".openRegister1")
    .addEventListener("click", function() {
      if (!$(".RegisterMenuContainer").is(":visible")) {
        $(".RegisterMenuContainer").slideDown();
        $("body").css("overflow", "hidden");
      } else {
        $(".RegisterMenuContainer").slideUp();
        $("body").css("overflow", "visible");
      }
      this.classList.toggle("active");
    });

  document.querySelector(".openRegister").addEventListener("click", function() {
    if (!$(".RegisterMenuContainer").is(":visible")) {
      $(".RegisterMenuContainer").slideDown();
      $("body").css("overflow", "hidden");
    } else {
      $(".RegisterMenuContainer").slideUp();
      $("body").css("overflow", "visible");
    }
    this.classList.toggle("active");
  });

  $(".closeRegisterMenu").click(function() {
    $(".RegisterMenuContainer").slideUp();
    $("body").css("overflow", "visible");
  });

  document.querySelector(".openForgot").addEventListener("click", function() {
    if (!$(".ForgotMenuContainer").is(":visible")) {
      $(".ForgotMenuContainer").slideDown();
      $("body").css("overflow", "hidden");
    } else {
      $(".ForgotMenuContainer").slideUp();
      $("body").css("overflow", "visible");
    }
    this.classList.toggle("active");
  });

  $(".closeForgotMenu").click(function() {
    $(".ForgotMenuContainer").slideUp();
    $("body").css("overflow", "visible");
  });
  $(".closeForgotMenu1").click(function() {
    $(".ForgotMenuContainer").slideUp();
    $("body").css("overflow", "visible");
  });
  // bootstrap carousel plugin
  $(".carousel").carousel({
    interval: 5000,
    pause: ""
  });

  $(".coursesCollapseContent").css("display", "none");
  $(".coursesCollapseContent:first").css("display", "block");
  $(".coursesCollapse").click(function() {
    if (
      $(this)
        .next(".coursesCollapseContent")
        .is(":hidden")
    ) {
      $(".coursesCollapse")
        .children("img")
        .attr("src", "./assets/img/plusBtn.png");
      $(".coursesCollapseContent").slideUp(300);
      $(this)
        .next(".coursesCollapseContent")
        .slideDown(300);
      $(this)
        .children("img")
        .attr("src", "./assets/img/minusBtn.png");
    } else {
      $(this)
        .next(".coursesCollapseContent")
        .slideUp(300);
      $(this)
        .children("img")
        .attr("src", "./assets/img/plusBtn.png");
    }
  });

  $(".customAccordion li").click(function() {
    $(".customAccordion .active").removeClass("active");
    var tab = $(this)
      .addClass("active")
      .data("accordion-content");
    $(".accordion-content.active").removeClass("active");
    $(".accordion-content[data-accordion-content=" + tab + "]").addClass(
      "active"
    );
  });
});
