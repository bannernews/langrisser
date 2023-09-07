filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function openForm0() {
  document.getElementById("myForm0").style.display = "block";
}

function closeForm0() {
  document.getElementById("myForm0").style.display = "none";
}

function openForm1() {
  document.getElementById("myForm1").style.display = "block";
}

function closeForm1() {
  document.getElementById("myForm1").style.display = "none";
}

function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}

function openForm3() {
  document.getElementById("myForm3").style.display = "block";
}

function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}

function openForm4() {
  document.getElementById("myForm4").style.display = "block";
}

function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
}

function openForm5() {
  document.getElementById("myForm5").style.display = "block";
}

function closeForm5() {
  document.getElementById("myForm5").style.display = "none";
}

function openForm6() {
  document.getElementById("myForm6").style.display = "block";
}

function closeForm6() {
  document.getElementById("myForm6").style.display = "none";
}

function openForm7() {
  document.getElementById("myForm7").style.display = "block";
}

function closeForm7() {
  document.getElementById("myForm7").style.display = "none";
}

function openForm8() {
  document.getElementById("myForm8").style.display = "block";
}

function closeForm8() {
  document.getElementById("myForm8").style.display = "none";
}

function openForm9() {
  document.getElementById("myForm9").style.display = "block";
}

function closeForm9() {
  document.getElementById("myForm9").style.display = "none";
}

function openForm10() {
  document.getElementById("myForm10").style.display = "block";
}

function closeForm10() {
  document.getElementById("myForm10").style.display = "none";
}

function openForm11() {
  document.getElementById("myForm11").style.display = "block";
}

function closeForm11() {
  document.getElementById("myForm11").style.display = "none";
}

function openForm12() {
  document.getElementById("myForm12").style.display = "block";
}

function closeForm12() {
  document.getElementById("myForm12").style.display = "none";
}

function openForm13() {
  document.getElementById("myForm13").style.display = "block";
}

function closeForm13() {
  document.getElementById("myForm13").style.display = "none";
}

function openForm14() {
  document.getElementById("myForm14").style.display = "block";
}

function closeForm14() {
  document.getElementById("myForm14").style.display = "none";
}

function openForm15() {
  document.getElementById("myForm15").style.display = "block";
}

function closeForm15() {
  document.getElementById("myForm15").style.display = "none";
}

function openForm16() {
  document.getElementById("myForm16").style.display = "block";
}

function closeForm16() {
  document.getElementById("myForm16").style.display = "none";
}

function openForm17() {
  document.getElementById("myForm17").style.display = "block";
}

function closeForm17() {
  document.getElementById("myForm17").style.display = "none";
}

function openForm18() {
  document.getElementById("myForm18").style.display = "block";
}

function closeForm18() {
  document.getElementById("myForm18").style.display = "none";
}

function openForm19() {
  document.getElementById("myForm19").style.display = "block";
}

function closeForm19() {
  document.getElementById("myForm19").style.display = "none";
}

function openForm20() {
  document.getElementById("myForm20").style.display = "block";
}

function closeForm20() {
  document.getElementById("myForm20").style.display = "none";
}

function openForm21() {
  document.getElementById("myForm21").style.display = "block";
}

function closeForm21() {
  document.getElementById("myForm21").style.display = "none";
}

function openForm22() {
  document.getElementById("myForm22").style.display = "block";
}

function closeForm22() {
  document.getElementById("myForm22").style.display = "none";
}

function openForm23() {
  document.getElementById("myForm23").style.display = "block";
}

function closeForm23() {
  document.getElementById("myForm23").style.display = "none";
}

function openForm24() {
  document.getElementById("myForm24").style.display = "block";
}

function closeForm24() {
  document.getElementById("myForm24").style.display = "none";
}

function openForm25() {
  document.getElementById("myForm25").style.display = "block";
}

function closeForm25() {
  document.getElementById("myForm25").style.display = "none";
}

function openForm26() {
  document.getElementById("myForm26").style.display = "block";
}

function closeForm26() {
  document.getElementById("myForm26").style.display = "none";
}

function openForm27() {
  document.getElementById("myForm27").style.display = "block";
}

function closeForm27() {
  document.getElementById("myForm27").style.display = "none";
}

function openForm28() {
  document.getElementById("myForm28").style.display = "block";
}

function closeForm28() {
  document.getElementById("myForm28").style.display = "none";
}

function openForm29() {
  document.getElementById("myForm29").style.display = "block";
}

function closeForm29() {
  document.getElementById("myForm29").style.display = "none";
}

function openForm30() {
  document.getElementById("myForm30").style.display = "block";
}

function closeForm30() {
  document.getElementById("myForm30").style.display = "none";
}

function openForm31() {
  document.getElementById("myForm31").style.display = "block";
}

function closeForm31() {
  document.getElementById("myForm31").style.display = "none";
}

function openForm32() {
  document.getElementById("myForm32").style.display = "block";
}

function closeForm32() {
  document.getElementById("myForm32").style.display = "none";
}

function openForm33() {
  document.getElementById("myForm33").style.display = "block";
}

function closeForm33() {
  document.getElementById("myForm33").style.display = "none";
}

function openForm34() {
  document.getElementById("myForm34").style.display = "block";
}

function closeForm34() {
  document.getElementById("myForm34").style.display = "none";
}

function openForm35() {
  document.getElementById("myForm35").style.display = "block";
}

function closeForm35() {
  document.getElementById("myForm35").style.display = "none";
}

function openForm36() {
  document.getElementById("myForm36").style.display = "block";
}

function closeForm36() {
  document.getElementById("myForm36").style.display = "none";
}

function openForm37() {
  document.getElementById("myForm37").style.display = "block";
}

function closeForm37() {
  document.getElementById("myForm37").style.display = "none";
}

function openForm38() {
  document.getElementById("myForm38").style.display = "block";
}

function closeForm38() {
  document.getElementById("myForm38").style.display = "none";
}

function openForm39() {
  document.getElementById("myForm39").style.display = "block";
}

function closeForm39() {
  document.getElementById("myForm39").style.display = "none";
}

function openForm40() {
  document.getElementById("myForm40").style.display = "block";
}

function closeForm40() {
  document.getElementById("myForm40").style.display = "none";
}

function openForm41() {
  document.getElementById("myForm41").style.display = "block";
}

function closeForm41() {
  document.getElementById("myForm41").style.display = "none";
}

function openForm42() {
  document.getElementById("myForm42").style.display = "block";
}

function closeForm42() {
  document.getElementById("myForm42").style.display = "none";
}

function openForm43() {
  document.getElementById("myForm43").style.display = "block";
}

function closeForm43() {
  document.getElementById("myForm43").style.display = "none";
}

function openForm44() {
  document.getElementById("myForm44").style.display = "block";
}

function closeForm44() {
  document.getElementById("myForm44").style.display = "none";
}

function openForm45() {
  document.getElementById("myForm45").style.display = "block";
}

function closeForm45() {
  document.getElementById("myForm45").style.display = "none";
}

function openForm46() {
  document.getElementById("myForm46").style.display = "block";
}

function closeForm46() {
  document.getElementById("myForm46").style.display = "none";
}

function openForm47() {
  document.getElementById("myForm47").style.display = "block";
}

function closeForm47() {
  document.getElementById("myForm47").style.display = "none";
}

function openForm48() {
  document.getElementById("myForm48").style.display = "block";
}

function closeForm48() {
  document.getElementById("myForm48").style.display = "none";
}

function openForm49() {
  document.getElementById("myForm49").style.display = "block";
}

function closeForm49() {
  document.getElementById("myForm49").style.display = "none";
}

function openForm50() {
  document.getElementById("myForm50").style.display = "block";
}

function closeForm50() {
  document.getElementById("myForm50").style.display = "none";
}

function openForm51() {
  document.getElementById("myForm51").style.display = "block";
}

function closeForm51() {
  document.getElementById("myForm51").style.display = "none";
}

function openForm52() {
  document.getElementById("myForm52").style.display = "block";
}

function closeForm52() {
  document.getElementById("myForm52").style.display = "none";
}

function openForm53() {
  document.getElementById("myForm53").style.display = "block";
}

function closeForm53() {
  document.getElementById("myForm53").style.display = "none";
}

function openForm54() {
  document.getElementById("myForm54").style.display = "block";
}

function closeForm54() {
  document.getElementById("myForm54").style.display = "none";
}

function openForm55() {
  document.getElementById("myForm55").style.display = "block";
}

function closeForm55() {
  document.getElementById("myForm55").style.display = "none";
}

function openForm56() {
  document.getElementById("myForm56").style.display = "block";
}

function closeForm56() {
  document.getElementById("myForm56").style.display = "none";
}

function openForm57() {
  document.getElementById("myForm57").style.display = "block";
}

function closeForm57() {
  document.getElementById("myForm57").style.display = "none";
}

function openForm58() {
  document.getElementById("myForm58").style.display = "block";
}

function closeForm58() {
  document.getElementById("myForm58").style.display = "none";
}

function openForm59() {
  document.getElementById("myForm59").style.display = "block";
}

function closeForm59() {
  document.getElementById("myForm59").style.display = "none";
}

function openForm60() {
  document.getElementById("myForm60").style.display = "block";
}

function closeForm60() {
  document.getElementById("myForm60").style.display = "none";
}

function openForm61() {
  document.getElementById("myForm61").style.display = "block";
}

function closeForm61() {
  document.getElementById("myForm61").style.display = "none";
}

function openForm62() {
  document.getElementById("myForm62").style.display = "block";
}

function closeForm62() {
  document.getElementById("myForm62").style.display = "none";
}

function openForm63() {
  document.getElementById("myForm63").style.display = "block";
}

function closeForm63() {
  document.getElementById("myForm63").style.display = "none";
}

function openForm64() {
  document.getElementById("myForm64").style.display = "block";
}

function closeForm64() {
  document.getElementById("myForm64").style.display = "none";
}

function openForm65() {
  document.getElementById("myForm65").style.display = "block";
}

function closeForm65() {
  document.getElementById("myForm65").style.display = "none";
}

function openForm66() {
  document.getElementById("myForm66").style.display = "block";
}

function closeForm66() {
  document.getElementById("myForm66").style.display = "none";
}

function openForm67() {
  document.getElementById("myForm67").style.display = "block";
}

function closeForm67() {
  document.getElementById("myForm67").style.display = "none";
}

function openForm68() {
  document.getElementById("myForm68").style.display = "block";
}

function closeForm68() {
  document.getElementById("myForm68").style.display = "none";
}

function openForm69() {
  document.getElementById("myForm69").style.display = "block";
}

function closeForm69() {
  document.getElementById("myForm69").style.display = "none";
}

function openForm70() {
  document.getElementById("myForm70").style.display = "block";
}

function closeForm70() {
  document.getElementById("myForm70").style.display = "none";
}

function openForm71() {
  document.getElementById("myForm71").style.display = "block";
}

function closeForm71() {
  document.getElementById("myForm71").style.display = "none";
}

function openForm72() {
  document.getElementById("myForm72").style.display = "block";
}

function closeForm72() {
  document.getElementById("myForm72").style.display = "none";
}

function openForm73() {
  document.getElementById("myForm73").style.display = "block";
}

function closeForm73() {
  document.getElementById("myForm73").style.display = "none";
}

function openForm74() {
  document.getElementById("myForm74").style.display = "block";
}

function closeForm74() {
  document.getElementById("myForm74").style.display = "none";
}

function openForm75() {
  document.getElementById("myForm75").style.display = "block";
}

function closeForm75() {
  document.getElementById("myForm75").style.display = "none";
}

function openForm76() {
  document.getElementById("myForm76").style.display = "block";
}

function closeForm76() {
  document.getElementById("myForm76").style.display = "none";
}

function openForm77() {
  document.getElementById("myForm77").style.display = "block";
}

function closeForm77() {
  document.getElementById("myForm77").style.display = "none";
}

function openForm78() {
  document.getElementById("myForm78").style.display = "block";
}

function closeForm78() {
  document.getElementById("myForm78").style.display = "none";
}

function openForm79() {
  document.getElementById("myForm79").style.display = "block";
}

function closeForm79() {
  document.getElementById("myForm79").style.display = "none";
}

function openForm80() {
  document.getElementById("myForm80").style.display = "block";
}

function closeForm80() {
  document.getElementById("myForm80").style.display = "none";
}

function openForm81() {
  document.getElementById("myForm81").style.display = "block";
}

function closeForm81() {
  document.getElementById("myForm81").style.display = "none";
}

function openForm82() {
  document.getElementById("myForm82").style.display = "block";
}

function closeForm82() {
  document.getElementById("myForm82").style.display = "none";
}

function openForm83() {
  document.getElementById("myForm83").style.display = "block";
}

function closeForm83() {
  document.getElementById("myForm83").style.display = "none";
}

function openForm84() {
  document.getElementById("myForm84").style.display = "block";
}

function closeForm84() {
  document.getElementById("myForm84").style.display = "none";
}

function openForm85() {
  document.getElementById("myForm85").style.display = "block";
}

function closeForm85() {
  document.getElementById("myForm85").style.display = "none";
}

function openForm86() {
  document.getElementById("myForm86").style.display = "block";
}

function closeForm86() {
  document.getElementById("myForm86").style.display = "none";
}

function openForm87() {
  document.getElementById("myForm87").style.display = "block";
}

function closeForm87() {
  document.getElementById("myForm87").style.display = "none";
}

function openForm88() {
  document.getElementById("myForm88").style.display = "block";
}

function closeForm88() {
  document.getElementById("myForm88").style.display = "none";
}

function openForm89() {
  document.getElementById("myForm89").style.display = "block";
}

function closeForm89() {
  document.getElementById("myForm89").style.display = "none";
}

function openForm90() {
  document.getElementById("myForm90").style.display = "block";
}

function closeForm90() {
  document.getElementById("myForm90").style.display = "none";
}

function openForm91() {
  document.getElementById("myForm91").style.display = "block";
}

function closeForm91() {
  document.getElementById("myForm91").style.display = "none";
}

function openForm92() {
  document.getElementById("myForm92").style.display = "block";
}

function closeForm92() {
  document.getElementById("myForm92").style.display = "none";
}

function openForm93() {
  document.getElementById("myForm93").style.display = "block";
}

function closeForm93() {
  document.getElementById("myForm93").style.display = "none";
}

function openForm94() {
  document.getElementById("myForm94").style.display = "block";
}

function closeForm94() {
  document.getElementById("myForm94").style.display = "none";
}

function openForm95() {
  document.getElementById("myForm95").style.display = "block";
}

function closeForm95() {
  document.getElementById("myForm95").style.display = "none";
}

function openForm96() {
  document.getElementById("myForm96").style.display = "block";
}

function closeForm96() {
  document.getElementById("myForm96").style.display = "none";
}

function openForm97() {
  document.getElementById("myForm97").style.display = "block";
}

function closeForm97() {
  document.getElementById("myForm97").style.display = "none";
}
function openForm98() {
  document.getElementById("myForm98").style.display = "block";
}

function closeForm98() {
  document.getElementById("myForm98").style.display = "none";
}
function openForm99() {
  document.getElementById("myForm99").style.display = "block";
}

function closeForm99() {
  document.getElementById("myForm99").style.display = "none";
}

function openForm100() {
  document.getElementById("myForm100").style.display = "block";
}

function closeForm100() {
  document.getElementById("myForm100").style.display = "none";
}

function openForm101() {
  document.getElementById("myForm101").style.display = "block";
}

function closeForm101() {
  document.getElementById("myForm101").style.display = "none";
}

function openForm102() {
  document.getElementById("myForm102").style.display = "block";
}

function closeForm102() {
  document.getElementById("myForm102").style.display = "none";
}

function openForm103() {
  document.getElementById("myForm103").style.display = "block";
}

function closeForm103() {
  document.getElementById("myForm103").style.display = "none";
}

function openForm104() {
  document.getElementById("myForm104").style.display = "block";
}

function closeForm104() {
  document.getElementById("myForm104").style.display = "none";
}

function openForm105() {
  document.getElementById("myForm105").style.display = "block";
}

function closeForm105() {
  document.getElementById("myForm105").style.display = "none";
}

function openForm106() {
  document.getElementById("myForm106").style.display = "block";
}

function closeForm106() {
  document.getElementById("myForm106").style.display = "none";
}

function openForm107() {
  document.getElementById("myForm107").style.display = "block";
}

function closeForm107() {
  document.getElementById("myForm107").style.display = "none";
}

function openForm108() {
  document.getElementById("myForm108").style.display = "block";
}

function closeForm108() {
  document.getElementById("myForm108").style.display = "none";
}

function openForm109() {
  document.getElementById("myForm109").style.display = "block";
}

function closeForm109() {
  document.getElementById("myForm109").style.display = "none";
}

function openForm110() {
  document.getElementById("myForm110").style.display = "block";
}
function closeForm110() {
  document.getElementById("myForm110").style.display = "none";
}

function openForm111() {
  document.getElementById("myForm111").style.display = "block";
}

function closeForm111() {
  document.getElementById("myForm111").style.display = "none";
}

function openForm112() {
  document.getElementById("myForm112").style.display = "block";
}

function closeForm112() {
  document.getElementById("myForm112").style.display = "none";
}

function openForm113() {
  document.getElementById("myForm113").style.display = "block";
}

function closeForm113() {
  document.getElementById("myForm113").style.display = "none";
}

function openForm114() {
  document.getElementById("myForm114").style.display = "block";
}

function closeForm114() {
  document.getElementById("myForm114").style.display = "none";
}

function openForm115() {
  document.getElementById("myForm115").style.display = "block";
}

function closeForm115() {
  document.getElementById("myForm115").style.display = "none";
}
function openForm116() {
  document.getElementById("myForm116").style.display = "block";
}

function closeForm116() {
  document.getElementById("myForm116").style.display = "none";
}

function openForm117() {
  document.getElementById("myForm117").style.display = "block";
}

function closeForm117() {
  document.getElementById("myForm117").style.display = "none";
}

//병종 구분_1
function openForm_1() {
  document.getElementById("myForm_1").style.display = "block";
}

function closeForm_1() {
  document.getElementById("myForm_1").style.display = "none";
}
function openForm0_1() {
  document.getElementById("myForm0_1").style.display = "block";
}

function closeForm0_1() {
  document.getElementById("myForm0_1").style.display = "none";
}

function openForm1_1() {
  document.getElementById("myForm1_1").style.display = "block";
}

function closeForm1_1() {
  document.getElementById("myForm1_1").style.display = "none";
}

function openForm2_1() {
  document.getElementById("myForm2_1").style.display = "block";
}

function closeForm2_1() {
  document.getElementById("myForm2_1").style.display = "none";
}

function openForm3_1() {
  document.getElementById("myForm3_1").style.display = "block";
}

function closeForm3_1() {
  document.getElementById("myForm3_1").style.display = "none";
}

function openForm4_1() {
  document.getElementById("myForm4_1").style.display = "block";
}

function closeForm4_1() {
  document.getElementById("myForm4_1").style.display = "none";
}

function openForm5_1() {
  document.getElementById("myForm5_1").style.display = "block";
}

function closeForm5_1() {
  document.getElementById("myForm5_1").style.display = "none";
}

function openForm6_1() {
  document.getElementById("myForm6_1").style.display = "block";
}

function closeForm6_1() {
  document.getElementById("myForm6_1").style.display = "none";
}

function openForm7_1() {
  document.getElementById("myForm7_1").style.display = "block";
}

function closeForm7_1() {
  document.getElementById("myForm7_1").style.display = "none";
}

function openForm8_1() {
  document.getElementById("myForm8_1").style.display = "block";
}

function closeForm8_1() {
  document.getElementById("myForm8_1").style.display = "none";
}

function openForm9_1() {
  document.getElementById("myForm9_1").style.display = "block";
}

function closeForm9_1() {
  document.getElementById("myForm9_1").style.display = "none";
}

function openForm10_1() {
  document.getElementById("myForm10_1").style.display = "block";
}

function closeForm10_1() {
  document.getElementById("myForm10_1").style.display = "none";
}

function openForm11_1() {
  document.getElementById("myForm11_1").style.display = "block";
}

function closeForm11_1() {
  document.getElementById("myForm11_1").style.display = "none";
}

function openForm12_1() {
  document.getElementById("myForm12_1").style.display = "block";
}

function closeForm12_1() {
  document.getElementById("myForm12_1").style.display = "none";
}

function openForm13_1() {
  document.getElementById("myForm13_1").style.display = "block";
}

function closeForm13_1() {
  document.getElementById("myForm13_1").style.display = "none";
}

function openForm14_1() {
  document.getElementById("myForm14_1").style.display = "block";
}

function closeForm14_1() {
  document.getElementById("myForm14_1").style.display = "none";
}

function openForm15_1() {
  document.getElementById("myForm15_1").style.display = "block";
}

function closeForm15_1() {
  document.getElementById("myForm15_1").style.display = "none";
}

function openForm16_1() {
  document.getElementById("myForm16_1").style.display = "block";
}

function closeForm16_1() {
  document.getElementById("myForm16_1").style.display = "none";
}

function openForm17_1() {
  document.getElementById("myForm17_1").style.display = "block";
}

function closeForm17_1() {
  document.getElementById("myForm17_1").style.display = "none";
}

function openForm18_1() {
  document.getElementById("myForm18_1").style.display = "block";
}

function closeForm18_1() {
  document.getElementById("myForm18_1").style.display = "none";
}

function openForm19_1() {
  document.getElementById("myForm19_1").style.display = "block";
}

function closeForm19_1() {
  document.getElementById("myForm19_1").style.display = "none";
}

function openForm20_1() {
  document.getElementById("myForm20_1").style.display = "block";
}

function closeForm20_1() {
  document.getElementById("myForm20_1").style.display = "none";
}

function openForm21_1() {
  document.getElementById("myForm21_1").style.display = "block";
}

function closeForm21_1() {
  document.getElementById("myForm21_1").style.display = "none";
}

function openForm22_1() {
  document.getElementById("myForm22_1").style.display = "block";
}

function closeForm22_1() {
  document.getElementById("myForm22_1").style.display = "none";
}

function openForm23_1() {
  document.getElementById("myForm23_1").style.display = "block";
}

function closeForm23_1() {
  document.getElementById("myForm23_1").style.display = "none";
}

function openForm24_1() {
  document.getElementById("myForm24_1").style.display = "block";
}

function closeForm24_1() {
  document.getElementById("myForm24_1").style.display = "none";
}

function openForm25_1() {
  document.getElementById("myForm25_1").style.display = "block";
}

function closeForm25_1() {
  document.getElementById("myForm25_1").style.display = "none";
}

function openForm26_1() {
  document.getElementById("myForm26_1").style.display = "block";
}

function closeForm26_1() {
  document.getElementById("myForm26_1").style.display = "none";
}

function openForm27_1() {
  document.getElementById("myForm27_1").style.display = "block";
}

function closeForm27_1() {
  document.getElementById("myForm27_1").style.display = "none";
}

function openForm28_1() {
  document.getElementById("myForm28_1").style.display = "block";
}

function closeForm28_1() {
  document.getElementById("myForm28_1").style.display = "none";
}

function openForm29_1() {
  document.getElementById("myForm29_1").style.display = "block";
}

function closeForm29_1() {
  document.getElementById("myForm29_1").style.display = "none";
}

function openForm30_1() {
  document.getElementById("myForm30_1").style.display = "block";
}

function closeForm30_1() {
  document.getElementById("myForm30_1").style.display = "none";
}

function openForm31_1() {
  document.getElementById("myForm31_1").style.display = "block";
}

function closeForm31_1() {
  document.getElementById("myForm31_1").style.display = "none";
}

function openForm32_1() {
  document.getElementById("myForm32_1").style.display = "block";
}

function closeForm32_1() {
  document.getElementById("myForm32_1").style.display = "none";
}

function openForm33_1() {
  document.getElementById("myForm33_1").style.display = "block";
}

function closeForm33_1() {
  document.getElementById("myForm33_1").style.display = "none";
}

function openForm34_1() {
  document.getElementById("myForm34_1").style.display = "block";
}

function closeForm34_1() {
  document.getElementById("myForm34_1").style.display = "none";
}

function openForm35_1() {
  document.getElementById("myForm35_1").style.display = "block";
}

function closeForm35_1() {
  document.getElementById("myForm35_1").style.display = "none";
}

function openForm36_1() {
  document.getElementById("myForm36_1").style.display = "block";
}

function closeForm36_1() {
  document.getElementById("myForm36_1").style.display = "none";
}

function openForm37_1() {
  document.getElementById("myForm37_1").style.display = "block";
}

function closeForm37_1() {
  document.getElementById("myForm37_1").style.display = "none";
}

function openForm38_1() {
  document.getElementById("myForm38_1").style.display = "block";
}

function closeForm38_1() {
  document.getElementById("myForm38_1").style.display = "none";
}

function openForm39_1() {
  document.getElementById("myForm39_1").style.display = "block";
}

function closeForm39_1() {
  document.getElementById("myForm39_1").style.display = "none";
}

function openForm40_1() {
  document.getElementById("myForm40_1").style.display = "block";
}

function closeForm40_1() {
  document.getElementById("myForm40_1").style.display = "none";
}

function openForm41_1() {
  document.getElementById("myForm41_1").style.display = "block";
}

function closeForm41_1() {
  document.getElementById("myForm41_1").style.display = "none";
}

function openForm42_1() {
  document.getElementById("myForm42_1").style.display = "block";
}

function closeForm42_1() {
  document.getElementById("myForm42_1").style.display = "none";
}

function openForm43_1() {
  document.getElementById("myForm43_1").style.display = "block";
}

function closeForm43_1() {
  document.getElementById("myForm43_1").style.display = "none";
}

function openForm44_1() {
  document.getElementById("myForm44_1").style.display = "block";
}

function closeForm44_1() {
  document.getElementById("myForm44_1").style.display = "none";
}

function openForm45_1() {
  document.getElementById("myForm45_1").style.display = "block";
}

function closeForm45_1() {
  document.getElementById("myForm45_1").style.display = "none";
}

function openForm46_1() {
  document.getElementById("myForm46_1").style.display = "block";
}

function closeForm46_1() {
  document.getElementById("myForm46_1").style.display = "none";
}

function openForm47_1() {
  document.getElementById("myForm47_1").style.display = "block";
}

function closeForm47_1() {
  document.getElementById("myForm47_1").style.display = "none";
}

function openForm48_1() {
  document.getElementById("myForm48_1").style.display = "block";
}

function closeForm48_1() {
  document.getElementById("myForm48_1").style.display = "none";
}

function openForm49_1() {
  document.getElementById("myForm49_1").style.display = "block";
}

function closeForm49_1() {
  document.getElementById("myForm49_1").style.display = "none";
}

function openForm50_1() {
  document.getElementById("myForm50_1").style.display = "block";
}

function closeForm50_1() {
  document.getElementById("myForm50_1").style.display = "none";
}

function openForm51_1() {
  document.getElementById("myForm51_1").style.display = "block";
}

function closeForm51_1() {
  document.getElementById("myForm51_1").style.display = "none";
}

function openForm52_1() {
  document.getElementById("myForm52_1").style.display = "block";
}

function closeForm52_1() {
  document.getElementById("myForm52_1").style.display = "none";
}

function openForm53_1() {
  document.getElementById("myForm53_1").style.display = "block";
}

function closeForm53_1() {
  document.getElementById("myForm53_1").style.display = "none";
}

function openForm54_1() {
  document.getElementById("myForm54_1").style.display = "block";
}

function closeForm54_1() {
  document.getElementById("myForm54_1").style.display = "none";
}

function openForm55_1() {
  document.getElementById("myForm55_1").style.display = "block";
}

function closeForm55_1() {
  document.getElementById("myForm55_1").style.display = "none";
}

function openForm56_1() {
  document.getElementById("myForm56_1").style.display = "block";
}

function closeForm56_1() {
  document.getElementById("myForm56_1").style.display = "none";
}

function openForm57_1() {
  document.getElementById("myForm57_1").style.display = "block";
}

function closeForm57_1() {
  document.getElementById("myForm57_1").style.display = "none";
}

function openForm58_1() {
  document.getElementById("myForm58_1").style.display = "block";
}

function closeForm58_1() {
  document.getElementById("myForm58_1").style.display = "none";
}

function openForm59_1() {
  document.getElementById("myForm59_1").style.display = "block";
}

function closeForm59_1() {
  document.getElementById("myForm59_1").style.display = "none";
}

function openForm60_1() {
  document.getElementById("myForm60_1").style.display = "block";
}

//병종 구분_2
function openForm_2() {
  document.getElementById("myForm_2").style.display = "block";
}

function closeForm_2() {
  document.getElementById("myForm_2").style.display = "none";
}
function openForm0_2() {
  document.getElementById("myForm0_2").style.display = "block";
}

function closeForm0_2() {
  document.getElementById("myForm0_2").style.display = "none";
}

function openForm1_2() {
  document.getElementById("myForm1_2").style.display = "block";
}

function closeForm1_2() {
  document.getElementById("myForm1_2").style.display = "none";
}

function openForm2_2() {
  document.getElementById("myForm2_2").style.display = "block";
}

function closeForm2_2() {
  document.getElementById("myForm2_2").style.display = "none";
}

function openForm3_2() {
  document.getElementById("myForm3_2").style.display = "block";
}

function closeForm3_2() {
  document.getElementById("myForm3_2").style.display = "none";
}

function openForm4_2() {
  document.getElementById("myForm4_2").style.display = "block";
}

function closeForm4_2() {
  document.getElementById("myForm4_2").style.display = "none";
}

function openForm5_2() {
  document.getElementById("myForm5_2").style.display = "block";
}

function closeForm5_2() {
  document.getElementById("myForm5_2").style.display = "none";
}

function openForm6_2() {
  document.getElementById("myForm6_2").style.display = "block";
}

function closeForm6_2() {
  document.getElementById("myForm6_2").style.display = "none";
}

function openForm7_2() {
  document.getElementById("myForm7_2").style.display = "block";
}

function closeForm7_2() {
  document.getElementById("myForm7_2").style.display = "none";
}

function openForm8_2() {
  document.getElementById("myForm8_2").style.display = "block";
}

function closeForm8_2() {
  document.getElementById("myForm8_2").style.display = "none";
}

function openForm9_2() {
  document.getElementById("myForm9_2").style.display = "block";
}

function closeForm9_2() {
  document.getElementById("myForm9_2").style.display = "none";
}

function openForm10_2() {
  document.getElementById("myForm10_2").style.display = "block";
}

function closeForm10_2() {
  document.getElementById("myForm10_2").style.display = "none";
}

function openForm11_2() {
  document.getElementById("myForm11_2").style.display = "block";
}

function closeForm11_2() {
  document.getElementById("myForm11_2").style.display = "none";
}

function openForm12_2() {
  document.getElementById("myForm12_2").style.display = "block";
}

function closeForm12_2() {
  document.getElementById("myForm12_2").style.display = "none";
}

function openForm13_2() {
  document.getElementById("myForm13_2").style.display = "block";
}

function closeForm13_2() {
  document.getElementById("myForm13_2").style.display = "none";
}

function openForm14_2() {
  document.getElementById("myForm14_2").style.display = "block";
}

function closeForm14_2() {
  document.getElementById("myForm14_2").style.display = "none";
}

function openForm15_2() {
  document.getElementById("myForm15_2").style.display = "block";
}

function closeForm15_2() {
  document.getElementById("myForm15_2").style.display = "none";
}

function openForm16_2() {
  document.getElementById("myForm16_2").style.display = "block";
}

function closeForm16_2() {
  document.getElementById("myForm16_2").style.display = "none";
}

function openForm17_2() {
  document.getElementById("myForm17_2").style.display = "block";
}

function closeForm17_2() {
  document.getElementById("myForm17_2").style.display = "none";
}

function openForm18_2() {
  document.getElementById("myForm18_2").style.display = "block";
}

function closeForm18_2() {
  document.getElementById("myForm18_2").style.display = "none";
}

function openForm19_2() {
  document.getElementById("myForm19_2").style.display = "block";
}

function closeForm19_2() {
  document.getElementById("myForm19_2").style.display = "none";
}

function openForm20_2() {
  document.getElementById("myForm20_2").style.display = "block";
}

function closeForm20_2() {
  document.getElementById("myForm20_2").style.display = "none";
}

function openForm21_2() {
  document.getElementById("myForm21_2").style.display = "block";
}

function closeForm21_2() {
  document.getElementById("myForm21_2").style.display = "none";
}

function openForm22_2() {
  document.getElementById("myForm22_2").style.display = "block";
}

function closeForm22_2() {
  document.getElementById("myForm22_2").style.display = "none";
}

function openForm23_2() {
  document.getElementById("myForm23_2").style.display = "block";
}

function closeForm23_2() {
  document.getElementById("myForm23_2").style.display = "none";
}

function openForm24_2() {
  document.getElementById("myForm24_2").style.display = "block";
}

function closeForm24_2() {
  document.getElementById("myForm24_2").style.display = "none";
}

function openForm25_2() {
  document.getElementById("myForm25_2").style.display = "block";
}

function closeForm25_2() {
  document.getElementById("myForm25_2").style.display = "none";
}

function openForm26_2() {
  document.getElementById("myForm26_2").style.display = "block";
}

function closeForm26_2() {
  document.getElementById("myForm26_2").style.display = "none";
}

function openForm27_2() {
  document.getElementById("myForm27_2").style.display = "block";
}

function closeForm27_2() {
  document.getElementById("myForm27_2").style.display = "none";
}

function openForm28_2() {
  document.getElementById("myForm28_2").style.display = "block";
}

function closeForm28_2() {
  document.getElementById("myForm28_2").style.display = "none";
}

function openForm29_2() {
  document.getElementById("myForm29_2").style.display = "block";
}

function closeForm29_2() {
  document.getElementById("myForm29_2").style.display = "none";
}

function openForm30_2() {
  document.getElementById("myForm30_2").style.display = "block";
}

function closeForm30_2() {
  document.getElementById("myForm30_2").style.display = "none";
}

function openForm31_2() {
  document.getElementById("myForm31_2").style.display = "block";
}

function closeForm31_2() {
  document.getElementById("myForm31_2").style.display = "none";
}

function openForm32_2() {
  document.getElementById("myForm32_2").style.display = "block";
}

function closeForm32_2() {
  document.getElementById("myForm32_2").style.display = "none";
}

function openForm33_2() {
  document.getElementById("myForm33_2").style.display = "block";
}

function closeForm33_2() {
  document.getElementById("myForm33_2").style.display = "none";
}

function openForm34_2() {
  document.getElementById("myForm34_2").style.display = "block";
}

function closeForm34_2() {
  document.getElementById("myForm34_2").style.display = "none";
}

function openForm35_2() {
  document.getElementById("myForm35_2").style.display = "block";
}

function closeForm35_2() {
  document.getElementById("myForm35_2").style.display = "none";
}

function openForm36_2() {
  document.getElementById("myForm36_2").style.display = "block";
}

function closeForm36_2() {
  document.getElementById("myForm36_2").style.display = "none";
}

function openForm37_2() {
  document.getElementById("myForm37_2").style.display = "block";
}

function closeForm37_2() {
  document.getElementById("myForm37_2").style.display = "none";
}

function openForm38_2() {
  document.getElementById("myForm38_2").style.display = "block";
}

function closeForm38_2() {
  document.getElementById("myForm38_2").style.display = "none";
}

function openForm39_2() {
  document.getElementById("myForm39_2").style.display = "block";
}

function closeForm39_2() {
  document.getElementById("myForm39_2").style.display = "none";
}

function openForm40_2() {
  document.getElementById("myForm40_2").style.display = "block";
}

function closeForm40_2() {
  document.getElementById("myForm40_2").style.display = "none";
}

function openForm41_2() {
  document.getElementById("myForm41_2").style.display = "block";
}

function closeForm41_2() {
  document.getElementById("myForm41_2").style.display = "none";
}

function openForm42_2() {
  document.getElementById("myForm42_2").style.display = "block";
}

function closeForm42_2() {
  document.getElementById("myForm42_2").style.display = "none";
}

function openForm43_2() {
  document.getElementById("myForm43_2").style.display = "block";
}

function closeForm43_2() {
  document.getElementById("myForm43_2").style.display = "none";
}

function openForm44_2() {
  document.getElementById("myForm44_2").style.display = "block";
}

function closeForm44_2() {
  document.getElementById("myForm44_2").style.display = "none";
}

function openForm45_2() {
  document.getElementById("myForm45_2").style.display = "block";
}

function closeForm45_2() {
  document.getElementById("myForm45_2").style.display = "none";
}

function openForm46_2() {
  document.getElementById("myForm46_2").style.display = "block";
}

function closeForm46_2() {
  document.getElementById("myForm46_2").style.display = "none";
}

function openForm47_2() {
  document.getElementById("myForm47_2").style.display = "block";
}

function closeForm47_2() {
  document.getElementById("myForm47_2").style.display = "none";
}

function openForm48_2() {
  document.getElementById("myForm48_2").style.display = "block";
}

function closeForm48_2() {
  document.getElementById("myForm48_2").style.display = "none";
}

function openForm49_2() {
  document.getElementById("myForm49_2").style.display = "block";
}

function closeForm49_2() {
  document.getElementById("myForm49_2").style.display = "none";
}

function openForm50_2() {
  document.getElementById("myForm50_2").style.display = "block";
}

function closeForm50_2() {
  document.getElementById("myForm50_2").style.display = "none";
}

function openForm51_2() {
  document.getElementById("myForm51_2").style.display = "block";
}

function closeForm51_2() {
  document.getElementById("myForm51_2").style.display = "none";
}

function openForm52_2() {
  document.getElementById("myForm52_2").style.display = "block";
}

function closeForm52_2() {
  document.getElementById("myForm52_2").style.display = "none";
}

function openForm53_2() {
  document.getElementById("myForm53_2").style.display = "block";
}

function closeForm53_2() {
  document.getElementById("myForm53_2").style.display = "none";
}

function openForm54_2() {
  document.getElementById("myForm54_2").style.display = "block";
}

function closeForm54_2() {
  document.getElementById("myForm54_2").style.display = "none";
}

function openForm55_2() {
  document.getElementById("myForm55_2").style.display = "block";
}

function closeForm55_2() {
  document.getElementById("myForm55_2").style.display = "none";
}

function openForm56_2() {
  document.getElementById("myForm56_2").style.display = "block";
}

function closeForm56_2() {
  document.getElementById("myForm56_2").style.display = "none";
}

function openForm57_2() {
  document.getElementById("myForm57_2").style.display = "block";
}

function closeForm57_2() {
  document.getElementById("myForm57_2").style.display = "none";
}

function openForm58_2() {
  document.getElementById("myForm58_2").style.display = "block";
}

function closeForm58_2() {
  document.getElementById("myForm58_2").style.display = "none";
}

function openForm59_2() {
  document.getElementById("myForm59_2").style.display = "block";
}

function closeForm59_2() {
  document.getElementById("myForm59_2").style.display = "none";
}

function openForm60_2() {
  document.getElementById("myForm60_2").style.display = "block";
}

//병종 구분 3

//병종 구분_2
function openForm_3() {
  document.getElementById("myForm_3").style.display = "block";
}

function closeForm_3() {
  document.getElementById("myForm_3").style.display = "none";
}
function openForm0_3() {
  document.getElementById("myForm0_3").style.display = "block";
}

function closeForm0_3() {
  document.getElementById("myForm0_3").style.display = "none";
}

function openForm1_3() {
  document.getElementById("myForm1_3").style.display = "block";
}

function closeForm1_3() {
  document.getElementById("myForm1_3").style.display = "none";
}

function openForm2_3() {
  document.getElementById("myForm2_3").style.display = "block";
}

function closeForm2_3() {
  document.getElementById("myForm2_3").style.display = "none";
}

function openForm3_3() {
  document.getElementById("myForm3_3").style.display = "block";
}

function closeForm3_3() {
  document.getElementById("myForm3_3").style.display = "none";
}

function openForm4_3() {
  document.getElementById("myForm4_3").style.display = "block";
}

function closeForm4_3() {
  document.getElementById("myForm4_3").style.display = "none";
}

function openForm5_3() {
  document.getElementById("myForm5_3").style.display = "block";
}

function closeForm5_3() {
  document.getElementById("myForm5_3").style.display = "none";
}

function openForm6_3() {
  document.getElementById("myForm6_3").style.display = "block";
}

function closeForm6_3() {
  document.getElementById("myForm6_3").style.display = "none";
}

function openForm7_3() {
  document.getElementById("myForm7_3").style.display = "block";
}

function closeForm7_3() {
  document.getElementById("myForm7_3").style.display = "none";
}

function openForm8_3() {
  document.getElementById("myForm8_3").style.display = "block";
}

function closeForm8_3() {
  document.getElementById("myForm8_3").style.display = "none";
}

function openForm9_3() {
  document.getElementById("myForm9_3").style.display = "block";
}

function closeForm9_3() {
  document.getElementById("myForm9_3").style.display = "none";
}

function openForm10_3() {
  document.getElementById("myForm10_3").style.display = "block";
}

function closeForm10_3() {
  document.getElementById("myForm10_3").style.display = "none";
}

function openForm11_3() {
  document.getElementById("myForm11_3").style.display = "block";
}

function closeForm11_3() {
  document.getElementById("myForm11_3").style.display = "none";
}

function openForm12_3() {
  document.getElementById("myForm12_3").style.display = "block";
}

function closeForm12_3() {
  document.getElementById("myForm12_3").style.display = "none";
}

function openForm13_3() {
  document.getElementById("myForm13_3").style.display = "block";
}

function closeForm13_3() {
  document.getElementById("myForm13_3").style.display = "none";
}

function openForm14_3() {
  document.getElementById("myForm14_3").style.display = "block";
}

function closeForm14_3() {
  document.getElementById("myForm14_3").style.display = "none";
}

function openForm15_3() {
  document.getElementById("myForm15_3").style.display = "block";
}

function closeForm15_3() {
  document.getElementById("myForm15_3").style.display = "none";
}

function openForm16_3() {
  document.getElementById("myForm16_3").style.display = "block";
}

function closeForm16_3() {
  document.getElementById("myForm16_3").style.display = "none";
}

function openForm17_3() {
  document.getElementById("myForm17_3").style.display = "block";
}

function closeForm17_3() {
  document.getElementById("myForm17_3").style.display = "none";
}

function openForm18_3() {
  document.getElementById("myForm18_3").style.display = "block";
}

function closeForm18_3() {
  document.getElementById("myForm18_3").style.display = "none";
}

function openForm19_3() {
  document.getElementById("myForm19_3").style.display = "block";
}

function closeForm19_3() {
  document.getElementById("myForm19_3").style.display = "none";
}

function openForm20_3() {
  document.getElementById("myForm20_3").style.display = "block";
}

function closeForm20_3() {
  document.getElementById("myForm20_3").style.display = "none";
}

function openForm21_3() {
  document.getElementById("myForm21_3").style.display = "block";
}

function closeForm21_3() {
  document.getElementById("myForm21_3").style.display = "none";
}

function openForm22_3() {
  document.getElementById("myForm22_3").style.display = "block";
}

function closeForm22_3() {
  document.getElementById("myForm22_3").style.display = "none";
}

function openForm23_3() {
  document.getElementById("myForm23_3").style.display = "block";
}

function closeForm23_3() {
  document.getElementById("myForm23_3").style.display = "none";
}

function openForm24_3() {
  document.getElementById("myForm24_3").style.display = "block";
}

function closeForm24_3() {
  document.getElementById("myForm24_3").style.display = "none";
}

function openForm25_3() {
  document.getElementById("myForm25_3").style.display = "block";
}

function closeForm25_3() {
  document.getElementById("myForm25_3").style.display = "none";
}

function openForm26_3() {
  document.getElementById("myForm26_3").style.display = "block";
}

function closeForm26_3() {
  document.getElementById("myForm26_3").style.display = "none";
}

function openForm27_3() {
  document.getElementById("myForm27_3").style.display = "block";
}

function closeForm27_3() {
  document.getElementById("myForm27_3").style.display = "none";
}

function openForm28_3() {
  document.getElementById("myForm28_3").style.display = "block";
}

function closeForm28_3() {
  document.getElementById("myForm28_3").style.display = "none";
}

function openForm29_3() {
  document.getElementById("myForm29_3").style.display = "block";
}

function closeForm29_3() {
  document.getElementById("myForm29_3").style.display = "none";
}

function openForm30_3() {
  document.getElementById("myForm30_3").style.display = "block";
}

function closeForm30_3() {
  document.getElementById("myForm30_3").style.display = "none";
}

function openForm31_3() {
  document.getElementById("myForm31_3").style.display = "block";
}

function closeForm31_3() {
  document.getElementById("myForm31_3").style.display = "none";
}

function openForm32_3() {
  document.getElementById("myForm32_3").style.display = "block";
}

function closeForm32_3() {
  document.getElementById("myForm32_3").style.display = "none";
}

function openForm33_3() {
  document.getElementById("myForm33_3").style.display = "block";
}

function closeForm33_3() {
  document.getElementById("myForm33_3").style.display = "none";
}

function openForm34_3() {
  document.getElementById("myForm34_3").style.display = "block";
}

function closeForm34_3() {
  document.getElementById("myForm34_3").style.display = "none";
}

function openForm35_3() {
  document.getElementById("myForm35_3").style.display = "block";
}

function closeForm35_3() {
  document.getElementById("myForm35_3").style.display = "none";
}

function openForm36_3() {
  document.getElementById("myForm36_3").style.display = "block";
}

function closeForm36_3() {
  document.getElementById("myForm36_3").style.display = "none";
}

function openForm37_3() {
  document.getElementById("myForm37_3").style.display = "block";
}

function closeForm37_3() {
  document.getElementById("myForm37_3").style.display = "none";
}

function openForm38_3() {
  document.getElementById("myForm38_3").style.display = "block";
}

function closeForm38_3() {
  document.getElementById("myForm38_3").style.display = "none";
}

function openForm39_3() {
  document.getElementById("myForm39_3").style.display = "block";
}

function closeForm39_3() {
  document.getElementById("myForm39_3").style.display = "none";
}

function openForm40_3() {
  document.getElementById("myForm40_3").style.display = "block";
}

function closeForm40_3() {
  document.getElementById("myForm40_3").style.display = "none";
}

function openForm41_3() {
  document.getElementById("myForm41_3").style.display = "block";
}

function closeForm41_3() {
  document.getElementById("myForm41_3").style.display = "none";
}

function openForm42_3() {
  document.getElementById("myForm42_3").style.display = "block";
}

function closeForm42_3() {
  document.getElementById("myForm42_3").style.display = "none";
}

function openForm43_3() {
  document.getElementById("myForm43_3").style.display = "block";
}

function closeForm43_3() {
  document.getElementById("myForm43_3").style.display = "none";
}

function openForm44_3() {
  document.getElementById("myForm44_3").style.display = "block";
}

function closeForm44_3() {
  document.getElementById("myForm44_3").style.display = "none";
}

function openForm45_3() {
  document.getElementById("myForm45_3").style.display = "block";
}

function closeForm45_3() {
  document.getElementById("myForm45_3").style.display = "none";
}

function openForm46_3() {
  document.getElementById("myForm46_3").style.display = "block";
}

function closeForm46_3() {
  document.getElementById("myForm46_3").style.display = "none";
}

function openForm47_3() {
  document.getElementById("myForm47_3").style.display = "block";
}

function closeForm47_3() {
  document.getElementById("myForm47_3").style.display = "none";
}

function openForm48_3() {
  document.getElementById("myForm48_3").style.display = "block";
}

function closeForm48_3() {
  document.getElementById("myForm48_3").style.display = "none";
}

function openForm49_3() {
  document.getElementById("myForm49_3").style.display = "block";
}

function closeForm49_3() {
  document.getElementById("myForm49_3").style.display = "none";
}

function openForm50_3() {
  document.getElementById("myForm50_3").style.display = "block";
}

function closeForm50_3() {
  document.getElementById("myForm50_3").style.display = "none";
}

function openForm51_3() {
  document.getElementById("myForm51_3").style.display = "block";
}

function closeForm51_3() {
  document.getElementById("myForm51_3").style.display = "none";
}

function openForm52_3() {
  document.getElementById("myForm52_3").style.display = "block";
}

function closeForm52_3() {
  document.getElementById("myForm52_3").style.display = "none";
}

function openForm53_3() {
  document.getElementById("myForm53_3").style.display = "block";
}

function closeForm53_3() {
  document.getElementById("myForm53_3").style.display = "none";
}

function openForm54_3() {
  document.getElementById("myForm54_3").style.display = "block";
}

function closeForm54_3() {
  document.getElementById("myForm54_3").style.display = "none";
}

function openForm55_3() {
  document.getElementById("myForm55_3").style.display = "block";
}

function closeForm55_3() {
  document.getElementById("myForm55_3").style.display = "none";
}

function openForm56_3() {
  document.getElementById("myForm56_3").style.display = "block";
}

function closeForm56_3() {
  document.getElementById("myForm56_3").style.display = "none";
}

function openForm57_3() {
  document.getElementById("myForm57_3").style.display = "block";
}

function closeForm57_3() {
  document.getElementById("myForm57_3").style.display = "none";
}

function openForm58_3() {
  document.getElementById("myForm58_3").style.display = "block";
}

function closeForm58_3() {
  document.getElementById("myForm58_3").style.display = "none";
}

function openForm59_3() {
  document.getElementById("myForm59_3").style.display = "block";
}

function closeForm59_3() {
  document.getElementById("myForm59_3").style.display = "none";
}

function openForm60_3() {
  document.getElementById("myForm60_3").style.display = "block";
}