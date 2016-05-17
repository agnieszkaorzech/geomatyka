/**
 * Created by aa on 2016-05-17.
 */

$(document).ready(function () {

    var viewModel;
    viewModel = kendo.observable({
        isVisible: true,
        onSave: function (e) {
            kendoConsole.log("event :: save(" + kendo.stringify(e.values, null, 4) + ")");
        },
        onMenuSelect: function (e) {
            var text = $(e.item).data('menuId');
            switch (text) {
                case"dodajUzytkownika":
                    $('#window2').data('kendoWindow').open();
                    break;
                case"dodajUprawnienia":
                    $('#window3').data('kendoWindow').open();
                    break;
                case "rola_search":
                    break;
                case "login_id_search":
                    break;
                case "edycjauzytkownika":
                    break;

            }
        },
        products: new kendo.data.DataSource({
            schema: {
                model: {
                    id: "grid",
                    fields: {
                        login: {type: "string"},
                        naz_druk: {type: "string"},
                        naz_wys: {type: "string"},
                        zabl: {type: "string"},
                        arch: {type: "string"},
                        ost_log: {type: "date", editable: false},
                        il_log: {type: "number", editable: false},
                        gen_zap: {type: "number", editable: false},
                        il_zap: {type: "number", editable: false}
                    }
                }
            },
            batch: true,
            data: [{
                "login": "AGCDE",
                "naz_druk": "Jan Kowalski",
                "naz_wys": "Jan Kowalski",
                "zabl": "TAK",
                "arch": "NIE",
                "ost_log": "12/12/2016",
                "il_log": "5",
                "gen_zap": "5",
                "il_zap": "5"
            },
                {
                    "login": "bbbGCDE",
                    "naz_druk": "Jan Nowak",
                    "naz_wys": "Jan Nowak",
                    "zabl": "NIE",
                    "arch": "NIE",
                    "ost_log": "12/06/2016",
                    "il_log": "2",
                    "gen_zap": "2",
                    "il_zap": "2"
                }]
        })
    });

    kendo.bind($("#oknoGlowne"), viewModel);
});


