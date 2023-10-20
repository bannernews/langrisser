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
function checkbox_Check(){
    var x, i;
    var c = "종료";
    x = document.getElementsByClassName("filterDiv");

    if ($("input:checkbox[name=chkEvent]").is(":checked") == false) {
        //체크가 되어있을때.
        for (i = 0; i < x.length; i++) {
            if (x[i].className.indexOf(c) > -1) {
                w3AddClass(x[i], "show");
            }
        }       
    } else {
        //체크 안되어있으면
        for (i = 0; i < x.length; i++) {
            if (x[i].className.indexOf(c) > -1) {
                w3AddClass(x[i], "hide");
            }
        }
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