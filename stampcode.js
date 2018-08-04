//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<AcroForm>
//<ACRO_source>nozzle2Field:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:nozzle2Field:Calculate ***********/
//7th Row for nozzle2Field

var dialog = {
        nozValue: "",
        faValue: "",
        flValue: "",
        fcValue: "",
        maValue: "",
        mcValue: "",
        mlValue: "",
 
        commit:function (dialog) { // called when OK pressed
                var results = dialog.store();
                this.nozValue = results["txt1"];
                this.faValue = results["txt2"];
                this.flValue = results["txt3"];
                this.fcValue = results["txt4"];
                this.maValue = results["txt5"];
                this.mcValue = results["txt6"];
                this.mlValue = results["txt7"];
        },     
 
//Because of some weird mechanic which causes last placed calc code block to run earliest.
//Dialog box title, name, will tell order of placing
//while the name of first element (Nozzle ID) will tell order of code run. (increases everytime new code block is placed.
        description:
        {      
                name: "2 Nozzle Load",    // Dialog box title
                elements:
                [      
                        {      
                                type: "view",
                                elements:
                                [      
                                        {      
                                                name: "7th Nozzle ID: ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt1",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        }, 
                                        {      
                                                name: "Fa (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt2",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fl (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt3",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fc (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt4",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ma (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt5",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Mc (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt6",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ml (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt7",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },

                                        {      
                                                type: "ok_cancel",
                                                ok_name: "Ok",
                                                cancel_name: "Cancel"
                                        },     
                                ]      
                        },     
                ]      
        }      
};
 

//Line below Runs dialog function (prompt window) if stamp is placed down

if(event.source.forReal && (event.source.stampName == "#nozzle"))
{
  if ("ok" == app.execDialog(dialog))
  {
    var cMsg = dialog.nozValue;
    event.value = "\n" + cMsg;
 
    cMsg = "\n" + dialog.faValue;
    this.getField("fa2Field").value = cMsg;

    cMsg = "\n" + dialog.flValue;
    this.getField("fl2Field").value = cMsg;
 
    cMsg = "\n" + dialog.fcValue;
    this.getField("fc2Field").value = cMsg;

    cMsg = "\n" + dialog.maValue;
    this.getField("ma2Field").value = cMsg;

    cMsg = "\n" + dialog.mcValue;
    this.getField("mc2Field").value = cMsg;
 
    cMsg = "\n" + dialog.mlValue;
    this.getField("ml2Field").value = cMsg;

  }
}

//NOTES: noz, fa, fl, fc, ma, mc, ml. Remember to update field names.
//Code by Joey Koh :)
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>nozzle3Field:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:nozzle3Field:Calculate ***********/
//6th Row for nozzle3Field

var dialog = {
        nozValue: "",
        faValue: "",
        flValue: "",
        fcValue: "",
        maValue: "",
        mcValue: "",
        mlValue: "",
 
        commit:function (dialog) { // called when OK pressed
                var results = dialog.store();
                this.nozValue = results["txt1"];
                this.faValue = results["txt2"];
                this.flValue = results["txt3"];
                this.fcValue = results["txt4"];
                this.maValue = results["txt5"];
                this.mcValue = results["txt6"];
                this.mlValue = results["txt7"];
        },     
 
//Because of some weird mechanic which causes last placed calc code block to run earliest.
//Dialog box title, name, will tell order of placing
//while the name of first element (Nozzle ID) will tell order of code run. (increases everytime new code block is placed.
        description:
        {      
                name: "3 Nozzle Load",    // Dialog box title
                elements:
                [      
                        {      
                                type: "view",
                                elements:
                                [      
                                        {      
                                                name: "6th Nozzle ID: ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt1",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        }, 
                                        {      
                                                name: "Fa (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt2",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fl (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt3",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fc (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt4",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ma (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt5",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Mc (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt6",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ml (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt7",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },

                                        {      
                                                type: "ok_cancel",
                                                ok_name: "Ok",
                                                cancel_name: "Cancel"
                                        },     
                                ]      
                        },     
                ]      
        }      
};
 

//Line below Runs dialog function (prompt window) if stamp is placed down

if(event.source.forReal && (event.source.stampName == "#nozzle"))
{
  if ("ok" == app.execDialog(dialog))
  {
    var cMsg = dialog.nozValue;
    event.value = "\n" + cMsg;
 
    cMsg = "\n" + dialog.faValue;
    this.getField("fa3Field").value = cMsg;

    cMsg = "\n" + dialog.flValue;
    this.getField("fl3Field").value = cMsg;
 
    cMsg = "\n" + dialog.fcValue;
    this.getField("fc3Field").value = cMsg;

    cMsg = "\n" + dialog.maValue;
    this.getField("ma3Field").value = cMsg;

    cMsg = "\n" + dialog.mcValue;
    this.getField("mc3Field").value = cMsg;
 
    cMsg = "\n" + dialog.mlValue;
    this.getField("ml3Field").value = cMsg;

  }
}

//NOTES: noz, fa, fl, fc, ma, mc, ml. Remember to update field names.
//Code by Joey Koh :)
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>nozzle4Field:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:nozzle4Field:Calculate ***********/
//5th Row for nozzle4Field

var dialog = {
        nozValue: "",
        faValue: "",
        flValue: "",
        fcValue: "",
        maValue: "",
        mcValue: "",
        mlValue: "",
 
        commit:function (dialog) { // called when OK pressed
                var results = dialog.store();
                this.nozValue = results["txt1"];
                this.faValue = results["txt2"];
                this.flValue = results["txt3"];
                this.fcValue = results["txt4"];
                this.maValue = results["txt5"];
                this.mcValue = results["txt6"];
                this.mlValue = results["txt7"];
        },     
 
//Because of some weird mechanic which causes last placed calc code block to run earliest.
//Dialog box title, name, will tell order of placing
//while the name of first element (Nozzle ID) will tell order of code run. (increases everytime new code block is placed.
        description:
        {      
                name: "4 Nozzle Load",    // Dialog box title
                elements:
                [      
                        {      
                                type: "view",
                                elements:
                                [      
                                        {      
                                                name: "5th Nozzle ID: ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt1",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        }, 
                                        {      
                                                name: "Fa (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt2",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fl (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt3",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fc (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt4",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ma (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt5",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Mc (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt6",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ml (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt7",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },

                                        {      
                                                type: "ok_cancel",
                                                ok_name: "Ok",
                                                cancel_name: "Cancel"
                                        },     
                                ]      
                        },     
                ]      
        }      
};
 

//Line below Runs dialog function (prompt window) if stamp is placed down

if(event.source.forReal && (event.source.stampName == "#nozzle"))
{
  if ("ok" == app.execDialog(dialog))
  {
    var cMsg = dialog.nozValue;
    event.value = "\n" + cMsg;
 
    cMsg = "\n" + dialog.faValue;
    this.getField("fa4Field").value = cMsg;

    cMsg = "\n" + dialog.flValue;
    this.getField("fl4Field").value = cMsg;
 
    cMsg = "\n" + dialog.fcValue;
    this.getField("fc4Field").value = cMsg;

    cMsg = "\n" + dialog.maValue;
    this.getField("ma4Field").value = cMsg;

    cMsg = "\n" + dialog.mcValue;
    this.getField("mc4Field").value = cMsg;
 
    cMsg = "\n" + dialog.mlValue;
    this.getField("ml4Field").value = cMsg;

  }
}

//NOTES: noz, fa, fl, fc, ma, mc, ml. Remember to update field names.
//Code by Joey Koh :)
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>nozzle5Field:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:nozzle5Field:Calculate ***********/
//4th Row for nozzle5Field

var dialog = {
        nozValue: "",
        faValue: "",
        flValue: "",
        fcValue: "",
        maValue: "",
        mcValue: "",
        mlValue: "",
 
        commit:function (dialog) { // called when OK pressed
                var results = dialog.store();
                this.nozValue = results["txt1"];
                this.faValue = results["txt2"];
                this.flValue = results["txt3"];
                this.fcValue = results["txt4"];
                this.maValue = results["txt5"];
                this.mcValue = results["txt6"];
                this.mlValue = results["txt7"];
        },     
 
//Because of some weird mechanic which causes last placed calc code block to run earliest.
//Dialog box title, name, will tell order of placing
//while the name of first element (Nozzle ID) will tell order of code run. (increases everytime new code block is placed.
        description:
        {      
                name: "5 Nozzle Load",    // Dialog box title
                elements:
                [      
                        {      
                                type: "view",
                                elements:
                                [      
                                        {      
                                                name: "4th Nozzle ID: ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt1",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        }, 
                                        {      
                                                name: "Fa (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt2",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fl (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt3",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fc (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt4",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ma (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt5",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Mc (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt6",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ml (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt7",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },

                                        {      
                                                type: "ok_cancel",
                                                ok_name: "Ok",
                                                cancel_name: "Cancel"
                                        },     
                                ]      
                        },     
                ]      
        }      
};
 

//Line below Runs dialog function (prompt window) if stamp is placed down

if(event.source.forReal && (event.source.stampName == "#nozzle"))
{
  if ("ok" == app.execDialog(dialog))
  {
    var cMsg = dialog.nozValue;
    event.value = "\n" + cMsg;
 
    cMsg = "\n" + dialog.faValue;
    this.getField("fa5Field").value = cMsg;

    cMsg = "\n" + dialog.flValue;
    this.getField("fl5Field").value = cMsg;
 
    cMsg = "\n" + dialog.fcValue;
    this.getField("fc5Field").value = cMsg;

    cMsg = "\n" + dialog.maValue;
    this.getField("ma5Field").value = cMsg;

    cMsg = "\n" + dialog.mcValue;
    this.getField("mc5Field").value = cMsg;
 
    cMsg = "\n" + dialog.mlValue;
    this.getField("ml5Field").value = cMsg;

  }
}

//NOTES: noz, fa, fl, fc, ma, mc, ml. Remember to update field names.
//Code by Joey Koh :)
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>nozzle6Field:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:nozzle6Field:Calculate ***********/
//3rd Row for nozzle6Field

var dialog = {
        nozValue: "",
        faValue: "",
        flValue: "",
        fcValue: "",
        maValue: "",
        mcValue: "",
        mlValue: "",
 
        commit:function (dialog) { // called when OK pressed
                var results = dialog.store();
                this.nozValue = results["txt1"];
                this.faValue = results["txt2"];
                this.flValue = results["txt3"];
                this.fcValue = results["txt4"];
                this.maValue = results["txt5"];
                this.mcValue = results["txt6"];
                this.mlValue = results["txt7"];
        },     
 
//Because of some weird mechanic which causes last placed calc code block to run earliest.
//Dialog box title, name, will tell order of placing
//while the name of first element (Nozzle ID) will tell order of code run. (increases everytime new code block is placed.
        description:
        {      
                name: "6 Nozzle Load",    // Dialog box title
                elements:
                [      
                        {      
                                type: "view",
                                elements:
                                [      
                                        {      
                                                name: "3rd Nozzle ID: ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt1",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        }, 
                                        {      
                                                name: "Fa (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt2",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fl (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt3",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fc (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt4",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ma (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt5",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Mc (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt6",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ml (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt7",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },

                                        {      
                                                type: "ok_cancel",
                                                ok_name: "Ok",
                                                cancel_name: "Cancel"
                                        },     
                                ]      
                        },     
                ]      
        }      
};
 

//Line below Runs dialog function (prompt window) if stamp is placed down

if(event.source.forReal && (event.source.stampName == "#nozzle"))
{
  if ("ok" == app.execDialog(dialog))
  {
    var cMsg = dialog.nozValue;
    event.value = "\n" + cMsg;
 
    cMsg = "\n" + dialog.faValue;
    this.getField("fa6Field").value = cMsg;

    cMsg = "\n" + dialog.flValue;
    this.getField("fl6Field").value = cMsg;
 
    cMsg = "\n" + dialog.fcValue;
    this.getField("fc6Field").value = cMsg;

    cMsg = "\n" + dialog.maValue;
    this.getField("ma6Field").value = cMsg;

    cMsg = "\n" + dialog.mcValue;
    this.getField("mc6Field").value = cMsg;
 
    cMsg = "\n" + dialog.mlValue;
    this.getField("ml6Field").value = cMsg;

  }
}

//NOTES: noz, fa, fl, fc, ma, mc, ml. Remember to update field names.
//Code by Joey Koh :)
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>nozzle7Field:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:nozzle7Field:Calculate ***********/
//2nd Row for nozzle7Field

var dialog = {
        nozValue: "",
        faValue: "",
        flValue: "",
        fcValue: "",
        maValue: "",
        mcValue: "",
        mlValue: "",
 
        commit:function (dialog) { // called when OK pressed
                var results = dialog.store();
                this.nozValue = results["txt1"];
                this.faValue = results["txt2"];
                this.flValue = results["txt3"];
                this.fcValue = results["txt4"];
                this.maValue = results["txt5"];
                this.mcValue = results["txt6"];
                this.mlValue = results["txt7"];
        },     
 
//Because of some weird mechanic which causes last placed calc code block to run earliest.
//Dialog box title, name, will tell order of placing
//while the name of first element (Nozzle ID) will tell order of code run. (increases everytime new code block is placed.
        description:
        {      
                name: "7 Nozzle Load",    // Dialog box title
                elements:
                [      
                        {      
                                type: "view",
                                elements:
                                [      
                                        {      
                                                name: "2nd Nozzle ID: ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt1",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        }, 
                                        {      
                                                name: "Fa (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt2",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fl (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt3",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fc (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt4",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ma (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt5",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Mc (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt6",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ml (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt7",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },

                                        {      
                                                type: "ok_cancel",
                                                ok_name: "Ok",
                                                cancel_name: "Cancel"
                                        },     
                                ]      
                        },     
                ]      
        }      
};
 

//Line below Runs dialog function (prompt window) if stamp is placed down

if(event.source.forReal && (event.source.stampName == "#nozzle"))
{
  if ("ok" == app.execDialog(dialog))
  {
    var cMsg = dialog.nozValue;
    event.value = "\n" + cMsg;
 
    cMsg = "\n" + dialog.faValue;
    this.getField("fa7Field").value = cMsg;

    cMsg = "\n" + dialog.flValue;
    this.getField("fl7Field").value = cMsg;
 
    cMsg = "\n" + dialog.fcValue;
    this.getField("fc7Field").value = cMsg;

    cMsg = "\n" + dialog.maValue;
    this.getField("ma7Field").value = cMsg;

    cMsg = "\n" + dialog.mcValue;
    this.getField("mc7Field").value = cMsg;
 
    cMsg = "\n" + dialog.mlValue;
    this.getField("ml7Field").value = cMsg;

  }
}

//NOTES: noz, fa, fl, fc, ma, mc, ml. Remember to update field names.
//Code by Joey Koh :)
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>nozzle8Field:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:nozzle8Field:Calculate ***********/
//First Row for nozzle8Field

var dialog = {
        noz8Value: "",
        fa8Value: "",
        fl8Value: "",
        fc8Value: "",
        ma8Value: "",
        mc8Value: "",
        ml8Value: "",
 
        commit:function (dialog) { // called when OK pressed
                var results = dialog.store();
                this.noz8Value = results["txt1"];
                this.fa8Value = results["txt2"];
                this.fl8Value = results["txt3"];
                this.fc8Value = results["txt4"];
                this.ma8Value = results["txt5"];
                this.mc8Value = results["txt6"];
                this.ml8Value = results["txt7"];
        },     

        description:
        {      
                name: "8 Nozzle Load",    // Dialog box title
                elements:
                [      
                        {      
                                type: "view",
                                elements:
                                [      
                                        {      
                                                name: "1st Nozzle ID: ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt1",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        }, 
                                        {      
                                                name: "Fa (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt2",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fl (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt3",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fc (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt4",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ma (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt5",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Mc (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt6",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ml (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt7",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },

                                        {      
                                                type: "ok_cancel",
                                                ok_name: "Ok",
                                                cancel_name: "Cancel"
                                        },     
                                ]      
                        },     
                ]      
        }      
};
 
// CODE ABOVE WORKS FINE, as the first field is filled in DC. Something below or to do with fieldnames.
//Line below Runs dialog function (prompt window) if stamp is placed down

if(event.source.forReal && (event.source.stampName == "#nozzle"))
{
  if ("ok" == app.execDialog(dialog))
  {
    var cMsg = dialog.noz8Value;
    event.value = "\n" + cMsg;
//    event.source.source.info.fa8Field = cMsg;
//  event.source.source.info.nozzle8Field = cMsg;
 
/*
    var cMsg2 = dialog.fa8Value;
    this.getField("fa8Field").value = cMsg2;

    var cMsg3 = dialog.fl8Value;
    var test1 = this.getField("fl8Field");
    test1.value= cMsg3
    
*/

    cMsg = "\n" + dialog.fa8Value;
    this.getField("fa8Field").value = cMsg;

    cMsg = "\n" + dialog.fl8Value;
    this.getField("fl8Field").value = cMsg;
 
    cMsg = "\n" + dialog.fc8Value;
    this.getField("fc8Field").value = cMsg;

    cMsg = "\n" + dialog.ma8Value;
    this.getField("ma8Field").value = cMsg;

    cMsg = "\n" + dialog.mc8Value;
    this.getField("mc8Field").value = cMsg;
 
    cMsg = "\n" + dialog.ml8Value;
    this.getField("ml8Field").value = cMsg;

  }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>nozzleField:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:nozzleField:Calculate ***********/
//8th Row for nozzleField

var dialog = {
        nozValue: "",
        faValue: "",
        flValue: "",
        fcValue: "",
        maValue: "",
        mcValue: "",
        mlValue: "",
 
        commit:function (dialog) { // called when OK pressed
                var results = dialog.store();
                this.nozValue = results["txt1"];
                this.faValue = results["txt2"];
                this.flValue = results["txt3"];
                this.fcValue = results["txt4"];
                this.maValue = results["txt5"];
                this.mcValue = results["txt6"];
                this.mlValue = results["txt7"];
        },     
 
 //Because of some weird mechanic which causes last placed calc code block to run earliest.
//Dialog box title, name, will tell order of placing
//while the name of first element (Nozzle ID) will tell order of code run. (increases everytime new code block is placed.

        description:
        {      
                name: "1 Nozzle Load",    // Dialog box title
                elements:
                [      
                        {      
                                type: "view",
                                elements:
                                [      
                                        {      
                                                name: "8th Nozzle ID: ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt1",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        }, 
                                        {      
                                                name: "Fa (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt2",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fl (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt3",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Fc (kN): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt4",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ma (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt5",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Mc (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt6",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },
                                        {      
                                                name: "Ml (kNm): ",
                                                type: "static_text",
                                        },     
                                        {      
                                                item_id: "txt7",
                                                type: "edit_text",
                                                width: 300,
                                                height: 30
                                        },

                                        {      
                                                type: "ok_cancel",
                                                ok_name: "Ok",
                                                cancel_name: "Cancel"
                                        },     
                                ]      
                        },     
                ]      
        }      
};
 

//Line below Runs dialog function (prompt window) if stamp is placed down

if(event.source.forReal && (event.source.stampName == "#nozzle"))
{
  if ("ok" == app.execDialog(dialog))
  {
    var cMsg = dialog.nozValue;
    event.value = "\n" + cMsg;
 
    cMsg = "\n" + dialog.faValue;
    this.getField("faField").value = cMsg;

    cMsg = "\n" + dialog.flValue;
    this.getField("flField").value = cMsg;
 
    cMsg = "\n" + dialog.fcValue;
    this.getField("fcField").value = cMsg;

    cMsg = "\n" + dialog.maValue;
    this.getField("maField").value = cMsg;

    cMsg = "\n" + dialog.mcValue;
    this.getField("mcField").value = cMsg;
 
    cMsg = "\n" + dialog.mlValue;
    this.getField("mlField").value = cMsg;

  }
}

//NOTES: noz, fa, fl, fc, ma, mc, ml. Remember to update getfield names.
//Code by Joey Koh :)
//</ACRO_script>
//</AcroForm>


