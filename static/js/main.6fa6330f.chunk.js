(this.webpackJsonpcalculatrice=this.webpackJsonpcalculatrice||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _media_sebou_Sauvegarde_Informatique_ProjetPerso_calculatrice_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_App_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_App_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__),bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_css_app_style_min_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),_css_app_style_min_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_css_app_style_min_css__WEBPACK_IMPORTED_MODULE_4__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)("0"),_useState2=Object(_media_sebou_Sauvegarde_Informatique_ProjetPerso_calculatrice_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),append=_useState2[0],setAppend=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState4=Object(_media_sebou_Sauvegarde_Informatique_ProjetPerso_calculatrice_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),formula=_useState4[0],setFormula=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),_useState6=Object(_media_sebou_Sauvegarde_Informatique_ProjetPerso_calculatrice_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),operator=_useState6[0],setOperator=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState8=Object(_media_sebou_Sauvegarde_Informatique_ProjetPerso_calculatrice_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),choiceOperator=_useState8[0],setChoiceOperator=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),_useState10=Object(_media_sebou_Sauvegarde_Informatique_ProjetPerso_calculatrice_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState9,2),decimal=_useState10[0],setDecimal=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),_useState12=Object(_media_sebou_Sauvegarde_Informatique_ProjetPerso_calculatrice_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState11,2),answerFind=_useState12[0],setAnswerFind=_useState12[1];function clear(){setAppend("0"),setFormula(""),setOperator(!1),setChoiceOperator(""),setDecimal(!1),setAnswerFind(!1)}function appendNumber(_){var e=_.target.textContent.trim();setOperator(!1),setChoiceOperator(""),"0"===append?(setAppend("".concat(e)),setFormula("".concat(formula+e)),setAnswerFind(!1)):"0."===append?(setAppend("".concat(append+e)),setFormula("".concat(formula+e))):answerFind?(setAppend("".concat(e)),setFormula("".concat(e)),setAnswerFind(!1)):operator?(2===choiceOperator.length?setAppend("".concat(append+e)):setAppend("".concat(e)),setFormula("".concat(formula+e))):(setAppend("".concat((append+e).replace(/^0+/,""))),setFormula("".concat((formula+e).replace(/^0+/,""))))}function operatorChoice(_){var e=_.target.textContent.trim();if(setChoiceOperator("".concat(e)),setAppend("".concat(e)),operator)"-"===e&choiceOperator.length<2?(console.log("Choice operator : "+choiceOperator.length),setAppend(e),setChoiceOperator("".concat(choiceOperator+e)),setFormula("".concat(formula+e))):(console.log("else"),setChoiceOperator("".concat(e)),setFormula("".concat(formula.substr(0,formula.length-choiceOperator.length)+e)));else if(choiceOperator!=="".concat(e))if(answerFind){var t=formula.indexOf("=");setFormula("".concat(formula.substr(t+1,formula.length)+e)),setAnswerFind(!1)}else setFormula("".concat(formula+e));setOperator(!0),setDecimal(!1)}function answer(e){var lastElementInFormula=parseFloat(formula.charAt(formula.length-1)),value=e.target.textContent.trim();if(!answerFind&!isNaN(lastElementInFormula)){var regex1=/x/gm,subst1="*",formulaModify=formula.replace(regex1,subst1),result=(Math.round(1e8*eval(formulaModify))/1e8).toString();setAppend(result),setFormula("".concat(formula+value+result)),setAnswerFind(!0),setDecimal(!1),setChoiceOperator("")}}function decimalButton(_){var e=_.target.textContent.trim();decimal||(setAppend("".concat(append+e)),"0"===append?setFormula("".concat("0"+e)):operator?(setFormula("".concat(formula+"0.")),setAppend("0.")):setFormula("".concat(formula+e)),setDecimal(!0))}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"App container",id:"calculatrice",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"formulaScreen text-right",children:formula}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"outputScreen text-right",id:"display",children:append}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"buttonArray",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"row",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col-6 btn",id:"clear",onClick:clear,children:"C"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn",id:"decimal",onClick:decimalButton,children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn operator",id:"divide",onClick:operatorChoice,children:"/"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"row",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn",id:"seven",onClick:appendNumber,children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn",id:"eight",onClick:appendNumber,children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn",id:"nine",onClick:appendNumber,children:"9 "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn operator",id:"multiply",onClick:operatorChoice,children:"x"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"row",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn",id:"four",onClick:appendNumber,children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn",id:"five",onClick:appendNumber,children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn",id:"six",onClick:appendNumber,children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn operator",id:"subtract",onClick:operatorChoice,children:"-"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"row",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn",id:"one",onClick:appendNumber,children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn",id:"two",onClick:appendNumber,children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn",id:"three",onClick:appendNumber,children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col btn operator",id:"add",onClick:operatorChoice,children:"+"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"row",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col-6 btn",id:"zero",onClick:appendNumber,children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col-6 btn",id:"equals",onClick:answer,children:"="})]})]})]})}__webpack_exports__.a=App},function(_,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),c=t(4),s=t.n(c),o=(t(11),t(5)),n=t(0);s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{})}),document.getElementById("root"))},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){}],[[6,1,2]]]);
//# sourceMappingURL=main.6fa6330f.chunk.js.map