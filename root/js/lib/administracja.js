/**
 * Created by aa on 2016-05-17.
 */
$(document).ready(function () {
    var jsondata ={
        "GetMenu": [{
            "OutletCode": "UPRAWNIENIA",
              "MenuGroup":[
    {

            "Name": "Architektura",
            "Text": "Architektura i budownictwo",
            "Permissions": [],
            "SubModules": [{
                "Name": "RejestrSpraw",
                "Text": "Rejestr spraw AiB",
                "Permissions": [{
                    "Id": 3096,
                    "Name": "WgladReferat",
                    "Type": "Function",
                    "Text": "Uprawnienie do wglądu do spraw w referacie",
                    "DenyCause": "wglądu do spraw w referacie"
                }, {
                    "Id": 3097,
                    "Name": "ModyfikacjaReferat",
                    "Type": "Function",
                    "Text": "Uprawnienie do modyfikacji spraw w referacie",
                    "DenyCause": "do modyfikacji spraw w referacie"
                }, {
                    "Id": 3098,
                    "Name": "WgladWydzial",
                    "Type": "Function",
                    "Text": "Uprawnienie do wglądu do spraw w wydziale",
                    "DenyCause": "wglądu do spraw w wydziale"
                }, {
                    "Id": 3099,
                    "Name": "ModyfikacjaWydzial",
                    "Type": "Function",
                    "Text": "Uprawnienie do modyfikacji spraw w wydziale",
                    "DenyCause": "do modyfikacji spraw w wydziale"
                }, {
                    "Id": 3100,
                    "Name": "WgladUrzad",
                    "Type": "Function",
                    "Text": "Uprawnienie do wglądu do spraw w urzędzie",
                    "DenyCause": "wglądu do spraw w urzędzie"
                }, {
                    "Id": 3101,
                    "Name": "ModyfikacjaUrzad",
                    "Type": "Function",
                    "Text": "Uprawnienie do modyfikacji do spraw w urzędzie",
                    "DenyCause": "do moddyfikacji do spraw w urzędzie"
                }, {
                    "Id": 3088,
                    "Name": "RaportyAiB",
                    "Type": "Function",
                    "Text": "Uprawnienie do tworzenia raportów ogólnych AiB",
                    "DenyCause": "do tworzenia raportów ogólnych AiB"
                }, {
                    "Id": 3089,
                    "Name": "AdministracjaAiB",
                    "Type": "Function",
                    "Text": "Uprawnienie do administrowania rejestrami spraw",
                    "DenyCause": "do administrowania rejestrami spraw"
                }],
                "SubModules": []
            }]
        }, {
            "Name": "EGiB",
            "Text": "Ewidencja Gruntów i Budynków",
            "Permissions": [],
            "SubModules": [{
                "Name": "KartotekaDzialek",
                "Text": "Kartoteka Działek",
                "Permissions": [{
                    "Id": 1050,
                    "Name": "Wglad",
                    "Type": "Module",
                    "Text": "Uprawnienie do wglądu do kartoteki działek",
                    "DenyCause": "wglądu do kartoteki działek"
                }, {
                    "Id": 1051,
                    "Name": "Raporty",
                    "Type": "Function",
                    "Text": "Uprawnienie do wgenerowania raportów",
                    "DenyCause": "do generowania raportów"
                }, {
                    "Id": 1052,
                    "Name": "Geometria",
                    "Type": "Function",
                    "Text": "Uprawnienie do wyświetlania geometrii działki",
                    "DenyCause": "wyświetlania geometrii działki"
                }],
                "SubModules": []
            }, {
                "Name": "KartotekaBudynkow",
                "Text": "Kartoteka Budynków",
                "Permissions": [{
                    "Id": 1060,
                    "Name": "Wglad",
                    "Type": "Module",
                    "Text": "Uprawnienie do wglądu do kartoteki budynków",
                    "DenyCause": "wglądu do kartoteki budynków"
                }, {
                    "Id": 1061,
                    "Name": "Raporty",
                    "Type": "Function",
                    "Text": "Uprawnienie do generowania raportów",
                    "DenyCause": "do generowania raportów"
                }, {
                    "Id": 1052,
                    "Name": "Geometria",
                    "Type": "Function",
                    "Text": "Uprawnienie do wyświetlania geometrii budynku",
                    "DenyCause": "wyświetlania geometrii budynku"
                }],
                "SubModules": []
            }, {
                "Name": "KartotekaLokali",
                "Text": "Kartoteka Lokali",
                "Permissions": [{
                    "Id": 1070,
                    "Name": "Wglad",
                    "Type": "Module",
                    "Text": "Uprawnienie do wglądu do kartoteki lokali",
                    "DenyCause": "wglądu do kartoteki działek"
                }, {
                    "Id": 1071,
                    "Name": "Raporty",
                    "Type": "Function",
                    "Text": "Uprawnienie do generowania raportów",
                    "DenyCause": "do generowania raportów"
                }],
                "SubModules": []
            }, {
                "Name": "KartotekaOsob",
                "Text": "Kartoteka Osób",
                "Permissions": [{
                    "Id": 1040,
                    "Name": "Wglad",
                    "Type": "Module",
                    "Text": "Uprawnienie do wglądu do kartoteki osób",
                    "DenyCause": "wglądu do kartoteki osób"
                }],
                "SubModules": []
            }]
        }, {
            "Name": "EOD",
            "Text": "Elektroniczny Obieg Dokumentów",
            "Permissions": [],
            "SubModules": [{
                "Name": "DokPrzychRejestr",
                "Text": "Rejestr dokumentów przychodzących",
                "Permissions": [{
                    "Id": 2731,
                    "Name": "Wglad",
                    "Type": "Module",
                    "Text": "Uprawnienie do wglądu do rejestru dokumentów przychodzących",
                    "DenyCause": "wglądu do rejestru dokumentów przychodzących"
                }, {
                    "Id": 2732,
                    "Name": "Dodawanie",
                    "Type": "Function",
                    "Text": "Uprawnienie do dodawania dokumentów przychodzących",
                    "DenyCause": "do dodawania dokumentów przychodzących"
                }, {
                    "Id": 2733,
                    "Name": "Modyfikajca",
                    "Type": "Function",
                    "Text": "Uprawnienie do modyfikacji dokumentów przychodzących",
                    "DenyCause": "do moddyfikacji dokumentów przychodzących"
                }, {
                    "Id": 2735,
                    "Name": "Usuwanie",
                    "Type": "Function",
                    "Text": "Uprawnienie do usuwania dokumentów przychodzących",
                    "DenyCause": "do usuwania dokumentów przychodzących"
                }, {
                    "Id": 3090,
                    "Name": "WgladReferat",
                    "Type": "Function",
                    "Text": "Uprawnienie do wglądu do dokumentów w referacie",
                    "DenyCause": "wglądu do dokumentów w referacie"
                }, {
                    "Id": 3091,
                    "Name": "ModyfikacjaReferat",
                    "Type": "Function",
                    "Text": "Uprawnienie do modyfikacji dokumentów w referacie",
                    "DenyCause": "do modyfikacji dokumentów w referacie"
                }, {
                    "Id": 3092,
                    "Name": "WgladWydzial",
                    "Type": "Function",
                    "Text": "Uprawnienie do wglądu do dokumentów w wydziale",
                    "DenyCause": "wglądu do dokumentów w wydziale"
                }, {
                    "Id": 3093,
                    "Name": "ModyfikacjaWydzial",
                    "Type": "Function",
                    "Text": "Uprawnienie do modyfikacji dokumentów w wydziale",
                    "DenyCause": "do modyfikacji dokumentów w wydziale"
                }, {
                    "Id": 3094,
                    "Name": "WgladUrzad",
                    "Type": "Function",
                    "Text": "Uprawnienie do wglądu do dokumentów w urzędzie",
                    "DenyCause": "wglądu do dokumentów w urzędzie"
                }, {
                    "Id": 3095,
                    "Name": "ModyfikajcaUrzad",
                    "Type": "Function",
                    "Text": "Uprawnienie do modyfikacji do dokumentów w urzędzie",
                    "DenyCause": "do moddyfikacji do dokumentów w urzędzie"
                }, {
                    "Id": 2736,
                    "Name": "Dekretowanie",
                    "Type": "Function",
                    "Text": "Uprawnienie do przepinania dokumentów przychodzących",
                    "DenyCause": "do przepinania dokumentów przychodzących"
                }, {
                    "Id": 2737,
                    "Name": "DodawanieBlob",
                    "Type": "Function",
                    "Text": "Uprawnienie do dodawania dokumentacji powiązanej dokumentów przychodzących",
                    "DenyCause": "do dodawania dokumentacji powiązanej dokumentów przychodzących"
                }, {
                    "Id": 2738,
                    "Name": "UsuwanieBlob",
                    "Type": "Function",
                    "Text": "Uprawnienie do usuwania dokumentacji powiązanej dokumentów przychodzących",
                    "DenyCause": "do usuwania dokumentacji powiązanej dokumentów przychodzących"
                }, {
                    "Id": 2739,
                    "Name": "WgladBlob",
                    "Type": "Function",
                    "Text": "Uprawnienie do wglądu do dokumentacji powiązanej dokumentów przychodzących",
                    "DenyCause": "do wglądu do dokumentacji powiązanej dokumentów przychodzących"
                }],
                "SubModules": []
            }, {
                "Name": "DokWychRejestr",
                "Text": "Rejestr dokumentów wychodzących",
                "Permissions": [{
                    "Id": 2610,
                    "Name": "Wglad",
                    "Type": "Module",
                    "Text": "Uprawnienie do wglądu do rejestru dokumentów wychodzących",
                    "DenyCause": "wglądu do rejestru dokumentów wychodzących"
                }, {
                    "Id": 2611,
                    "Name": "Modyfikajca",
                    "Type": "Function",
                    "Text": "Uprawnienie do modyfikacji dokumentów wychodzących",
                    "DenyCause": "do moddyfikacji dokumentów wychodzących"
                }, {
                    "Id": 2612,
                    "Name": "Usuwanie",
                    "Type": "Function",
                    "Text": "Uprawnienie do usuwania dokumentów wychodzących",
                    "DenyCause": "do usuwania dokumentów wychodzących"
                }, {
                    "Id": 2613,
                    "Name": "DodawanieBlob",
                    "Type": "Function",
                    "Text": "Uprawnienie do dodawania dokumentacji powiązanej dokumentów wychodzących",
                    "DenyCause": "do dodawania dokumentacji powiązanej dokumentów wychodzących"
                }, {
                    "Id": 2614,
                    "Name": "UsuwanieBlob",
                    "Type": "Function",
                    "Text": "Uprawnienie do usuwania dokumentacji powiązanej dokumentów wychodzących",
                    "DenyCause": "do usuwania dokumentacji powiązanej dokumentów wychodzących"
                }, {
                    "Id": 2615,
                    "Name": "WgladBlob",
                    "Type": "Function",
                    "Text": "Uprawnienie do wglądu do dokumentacji powiązanej dokumentów wychodzących",
                    "DenyCause": "do wglądu do dokumentacji powiązanej dokumentów wychodzących"
                }],
                "SubModules": []
            }]
        }, {
            "Name": "Petent",
            "Text": "Rejestr interesantów, rejestr uprawnionych",
            "Permissions": [],
            "SubModules": [{
                "Name": "PetenciRejestr",
                "Text": "Rejestr interesantów",
                "Permissions": [{
                    "Id": 2751,
                    "Name": "Wglad",
                    "Type": "Module",
                    "Text": "Uprawnienie do wglądu do rejestru interesantów",
                    "DenyCause": "wglądu do rejestru interesantów"
                }, {
                    "Id": 2752,
                    "Name": "DodawanieModyfikajca",
                    "Type": "Function",
                    "Text": "Uprawnienie do dodawania i modyfikacji interesantów",
                    "DenyCause": "do dodawania i moddyfikacji interesantów"
                }, {
                    "Id": 2753,
                    "Name": "Usuwanie",
                    "Type": "Function",
                    "Text": "Uprawnienie do usuwania interesantów",
                    "DenyCause": "do usuwania interesantów"
                }, {
                    "Id": 2757,
                    "Name": "Przepinanie",
                    "Type": "Function",
                    "Text": "Uprawnienie do przepinania interesantów",
                    "DenyCause": "do przepinania interesantów"
                }],
                "SubModules": []
            }, {
                "Name": "UprawnieniRejestr",
                "Text": "Rejestr uprawnienionych",
                "Permissions": [{
                    "Id": 2761,
                    "Name": "Wglad",
                    "Type": "Module",
                    "Text": "Uprawnienie do wglądu do rejestru uprawnionych",
                    "DenyCause": "wglądu do rejestru uprawnionych"
                }, {
                    "Id": 2762,
                    "Name": "DodawanieModyfikajca",
                    "Type": "Function",
                    "Text": "Uprawnienie do dodawania i modyfikacji uprawnionych",
                    "DenyCause": "do dodawania i moddyfikacji uprawnionych"
                }, {
                    "Id": 2763,
                    "Name": "Usuwanie",
                    "Type": "Function",
                    "Text": "Uprawnienie do usuwania uprawnionych",
                    "DenyCause": "do usuwania uprawnionych"
                }, {
                    "Id": 2767,
                    "Name": "Przepinanie",
                    "Type": "Function",
                    "Text": "Uprawnienie do przepinania uprawnionych",
                    "DenyCause": "do przepinania uprawnionych"
                }],
                "SubModules": []
                }]
            }]
        }]};

    var array = [];
    var object = {};
    object.Text = jsondata.GetMenu[0].OutletCode;
    object.SubModules = jsondata.GetMenu[0].MenuGroup;
    array.push(object);

    var inlineDefault;
    inlineDefault = new kendo.data.HierarchicalDataSource({
        data: array,
        schema: {
            model: {
                children: "SubModules"
            }
        }
    });

    $("#treeview-left").kendoTreeView({
        dataSource: inlineDefault,
        dataTextField: "Text"
    });


    // $(function(){
    //     $("#div2").hide();
    //     $("#detailUprawnienia").on("click", function(){
    //         $("#div1, #div2").toggle();
    //     });
    // });





    var viewModel;
    viewModel = kendo.observable({
        isVisible: true,
        onSave: function (e) {
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


