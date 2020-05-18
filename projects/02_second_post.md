---
title: the line
index_title: crazy telephones.
year: 2020
tags:
    - Personal Project
    - Raspberry Pi
    - Node.js
    - Electronics
    - Docker
color: "#6F32D1"
image: "/v1589816399/imakethings/hotline.png"
---
Meine Schwester wird im Herbst 2019 heiraten und will an der Hochzeitsfeier den Gästen die Möglichkeiten geben, Gruppenfotos selber zu machen und ein Andenken mit nach Hause zu nehmen.
Die portable Fotokabine oder Fotobox ist momentan für diesen Anwendungszweck sehr populär, jedoch sind die Angebote zur Miete eher teuer und auch optisch nicht unbedingt ansprechend.
Aus diesen Gründen habe ich mich entschieden, die Idee einer Fotobox zu einem eigenen Projekt zu machen und zu versuchen, mich auf den Design- und Entwicklungsprozess eines solchen Produktes vom Anfang bis zum Schluss zu konzentrieren.

Anforderungen
Die funktionalen Anforderungen eines Produktes ergeben sich hauptsächlich aus dem Nutzungskontext und den Endbenutzern.
In diesem Fall ist der Nutzungskontext eine Hochzeitsfeier, da ich aber die Box noch nach der Feier verwenden möchte, habe ich als Nutzungskontext allgemein Feiern / Events / Festivals mit verschiedensten Veranstaltungsorten gewählt. 
Dadurch ergeben sich auch direkt die Endbenutzer: Die Gäste und die Betreungsperson der Fotobox.
Aus diesen Recherchen und unter Berücksichtigung des Nutzungskontexts sowie der Endbenutzer habe ich folgende Hauptanforderungen für die Fotobox definiert:
Qualitativ hochwertige Fotos wie vom Fotografen, egal in welcher Lichtsituation
Einfache Bedienung für die Gäste ohne Anleitung
Ausdrucken der Fotos
Transportierbares, vielseitiges, "All-In-One" Dsign

Als weitere Vorbedingung hatte ich bereits eine alte digitale Spiegelreflexkamera und einen Computermonitor, die ich in meiner Fotobox verbauen wollte. Diese zwei Elemente ergeben also zusammen den Startpunkt der Hardware.

Überlegungen zur Umsetzung
Die Idee und die allerersten Skizzen zur Fotobox sind bereits im September 2017 entstanden. Ich fand aber nie einen Grund, das System tatsächlich umzusetzen. Zur Hochzeit meiner Schwester wurde dann der Nutzen eines solchen Produktes klarer und ich konnte mich auf die Umsetzung konzentrieren.
Ich habe mehrere Designiterationen für die Form der Fotobox durchlaufen. Die ersten Skizzen ähneln relativ stark dem Endprodukt. Später habe ich noch andere Optionen zur Umsetzung entworfen, verworfen und schlussendlich das finale Design erarbeitet. Die Fotobox wurde im Dezember 2018 fertiggestellt.

Auswahl der benötigten Hardware
 Aus den Vorbedingungen ergibt sich mit ein wenig Erfahrung und Recherche kombiniert bereits ein recht klares Bild, was für Hardware für die Umsetzung dieser Fotobox benötigt wird:
Eine digitale Spiegelreflexkamera mit USB-Schnittstelle
Blitzgeräte
Ein Bildschirm* und eine Webcam, damit sich die Gäste beim Posieren sehen können
Ein Fotodrucker
Ein Computer, der das ganze System steuert
Ich werde im folgenden auf jede dieser Komponenten tiefer eingehen.
3.1 Digitale Spiegelreflexkamera
Die Wahl fiel mir bezüglich der Kamera leicht, da bereits eine alte Spiegelreflexkamera (Nikon D5000) vorhanden war. Der einzige Anspruch an die Kamera war, dass sie qualitativ hochwertige Bilder aufnimmt und eine USB-Schnittstelle zur Steuerung durch einen Computer besitzt. Die Kamera sollte trotzdem im Endprodukt so verbaut werden, damit sie einfach herauszunehmen oder ggf. Auszutauschen wäre.
3.2 Blitzgeräte
Die Blitzgeräte sollten kostengünstig und kompakt sein, aber trotzdem genügend lichtstark, um auch eine dunkle Lichtsituation ausreichend auszuleuchten. Ich habe zwei chinesische Speedlights der Marke TRIOPO gewählt. Diese Blitzlichter haben einen gängigen Formfaktor, lassen sich einfach miteinander synchronisieren und sind sehr kostengünstig.
3.3 Bildschirm & Webcam
Der Bildschirm (Dell, Modell unbekannt) war ebenfalls bereits vorhanden und für ein solches Projekt bestens geeignet. Ich hatte ihn bereits vor Jahren an einem Flohmarkt gekauft und daraufhin aus seinem Gehäuse ausgebaut. Was mir an diesem Bildschirm sehr gefällt ist sowohl das eingebaute Netzteil, als auch sein Metallgehäuse mit integrierten Schraubgewinden, was ihn als Einbaukomponente sehr praktisch macht.
Da die Spiegelreflexkamera keine Echtzeitvorschau bietet, musste ich für die Vorschau eine Webcam in die Fotobox einbauen. Die Software zeigt während dem Posieren ein gespiegeltes Kamerabild an, sodass die Gäste sich sehen und alle ins Bild rücken können, bevor das eigentliche Foto gemacht wird. Die Webcam (Microsoft Lifecam HD) war sehr günstig und konnte einfach aus ihrem Gehäuse ausgebaut werden.

3.4 Fotodrucker
Um ein Erinnerungsstück für die Gäste hinzuzufügen, wollte ich einen Drucker in die Fotobox integrieren. Der Plan war zunächst, einen gewöhnlichen Thermosublimationsdrucker (Haushalts-Fotodrucker) zu verwenden. Diese haben jedoch sehr teures Verbrauchsmaterial (ca. 13 Rappen pro Foto) und drucken sehr langsam.
Als Alternative wählte ich einen Thermodrucker für Belegpapier. Dieser druckt zwar mit sehr geringer Auflösung und nur in Graustufen, aber die Bilder kosten weniger als 0.5 Rp. pro Ausdruck. Um die Bilder trotzdem noch in guter Qualität für die Gäste verfügbar zu machen, habe ich die Software so konzipiert, dass die Bilder automatisch auf einen Webserver hochgeladen werden, und auf die Ausdrucke eine kleine Nummer gedruckt wird. Mit dieser können die Gäste dann auf der Internetseite der Veranstaltung ihre Bilder abrufen.
3.5 Zentraler Steuerungscomputer
Als Steuerungscomputer für die Anzeige und die Software im Hintergrund habe ich einen Raspberry Pi 3 B+ gewählt. Diese kleinen Computer finden auf einer einzigen Platine Platz und sind sehr günstig. Ausserdem gibt es im Internet eine sehr grosse Community, was die Entwicklung dafür deutlich vereinfacht.

Softwareentwicklung
4.1 Übersicht
Ein typischer Ablauf des Use Case 'Foto aufnehmen' sieht folgendermassen aus:
Der Nutzer steht vor die Fotobox und sieht sein Spiegelbild auf dem Bildschirm.
Der Nutzer drückt den Auslöseknopf.
Das System zählt von 3 zurück und löst bei Ablauf des Countdowns die Kamera aus.
Das System zeigt das aufgenommene Bild auf dem Bildschirm an.
Das System druckt das Bild mit dem Thermodrucker.
Der Nutzer reisst das Papier ab.

Die Software, die die Fotobox betreibt, wird in zwei Komponenten aufgeteilt. Die Frontend-Software stellt die grafische Benutzeroberfläche bereit und steuert den Ablauf vom drücken des Auslösers bis zum Drucken des Fotos. Die Backend-Software verwaltet die Verbindung zu Peripheriegeräten wie Kamera und Drucker und leitet Eingaben von Knöpfen an das Frontend weiter.
4.2 Frontend-Technologie
Die Grafische Oberfläche habe ich basierend auf modernen Webtechnologien aufgebaut. Dies bringt den Vorteil, dass das Layout und die Optik der visuellen Elemente einfach gestaltet werden kann.
Ich habe das JavaScript-Framework Vue.js (vuejs.org) gewählt, da ich bereits in anderen Projekten schon einiges an Erfahrung mit diesem Tool gesammelt habe.
4.3 Backend-Technologie
Für das Backend habe ich die Programmiersprache Python gewählt. Mit Python lassen sich einfach sowohl kleinere als auch grosse Applikationen programmieren und es gibt eine breite Vielfalt an Dokumentation und Libraries. Ausserdem ist ein NGINX-Webserver (nginx.com) teil des Backends.
Dieser ist verantwortlich für die Bereitstellung der Frontend-Software an den Browser, sowie die Übertragung der Bilder vom Backend zum Frontend.
4.4 Kommunikation im System
Die beiden Subsysteme der Fotobox kommunizieren untereinander mit dem WebSocket-Protokoll. Es werden jeweils Nachrichten hin- und hergeschickt, die sowohl Informationen zu Ereignissen als auch Daten und Kommandos enthalten.
Zum Beispiel sendet das Backend, wenn es einen Knopfdruck erkennt, eine Nachricht an das Frontend, dass der Countdown gestartet werden soll. Wenn der Countdown abgelaufen ist, sendet das Frontend wiederum dem Backend eine Nachricht, dass die Kamera ausgelöst werden soll.

4.5 Erwähnenswerte Merkmale der Software
Die Software der Fotobox ist komplett modular aufgebaut. Dank der verwendeten Libraries mit sehr breiter Kompatibilität können z.B eine breite Vielfalt von Kameras und Drucker ohne grössere Konfigurationsarbeit an die Fotobox angeschlossen werden. Somit könnte zum Beispiel auch ein Thermosublimationsdrucker, wie er in kommerziellen Systemen zur Anwendung kommt, angeschlossen werden.
Auf der verschliessbaren Innenseite der Fotobox befinden sich drei Knöpfe, mit der wichtige Features des Systems angesteuert werden können. Darunter sind zum Beispiel eine Ansicht, mit der einige Einstellungen zum Verhalten der Fotobox angepasst werden können, und ein Knopf zum sicheren Herunterfahren des Systems.
In der Einstellungs-Ansicht können sämtliche Texte, die auf der Benutzeroberfläche angezeigt werden, individuell an die Veranstaltung angepasst werden. Ausserdem können Einstellungen zum Druck vorgenommen werden, wie zum Beispiel ob eine Nummer auf das Bild aufgedruckt werden soll.
Die Bilder werden durch eine separate Komponente des Frontends zum Druck vorbereitet. Darin können einfach auch weitere grafische Elemente hinzugefügt werden, wie zum Beispiel ein Logo des Veranstalters oder ein zusätzlicher Text, der auf das Foto gedruckt werden soll.
Gehäuse und Grafischer Auftritt
5.1 Konzept und Prototyping
Wie bereits erwähnt habe ich besonders bei der Entwicklung des Gehäuses mehrere sehr unterschiedliche Iterationen durchlaufen.
Zunächst war der Plan, einen Vollformat-Fotodrucker einzubauen. Dieser braucht viel Platz und darum waren auch die zwei ersten Entwürfe für die Box sehr gross.
Einer der Prototypen war ein 19" Audio-Rack mit einer Frontplatte aus Holz. Das Gehäuse allein war aber bereits über 10 Kilogramm schwer, auch ohne eingebaute Hardware.
Dies trug auch zur Entscheidung bei, den Fotodrucker wegzulassen und durch einen Thermodrucker zu ersetzen.
Ich habe mich am Ende entschieden, das Gehäuse aus 10mm-Sperrholz mit Phenolbeschichtung zu bauen und Beschläge, aus dem Bühnentechnik-Bedarf zu verwenden.

5.2 Definitiver Aufbau
Die Masse des Gehäuses richten sich zum grössten Teil am Bildschirm und der Kamera. Der Bildschirm wird an der integrierten VESA-Halterung an einem Zwischenbrett im Gehäuse montiert. Die Kamera ist an einem Tablar befestigt, in dem ein Schlitz für die Stativschraube eingefräst ist. Um die Höhe der Kamera zu fixieren verwende ich eine Z-Halterung, die in der Makrofotografie angewendet wird. Die Blitze werden an den mitgelieferten Hot-Shoe Halterungen angebracht. Diese sind fest mit dem Tablar verschraubt. So ist auch ein Batteriewechsel blitzschnell möglich.


Für die Montage der Stecker verwende ich Blechwannen aus der Bühnentechnik. Auch die Stecker sind im Bühnentechnik-Bereich sehr bekannt: Der Kameraauslöser wird mit einem konventionellen XLR-Kabel angeschlossen, das 220V-Stromkabel über einen sogenannten PowerCon-Stecker. Dieser hat den Vorteil, dass er durch die integrierte Verriegelung vor Ausstecken geschützt ist.
Direkt neben der Steckerplatte befindet sich das 5V Schaltnetzteil, welches den Raspberry Pi und den Drucker mit Strom versorgt. Für die Spiegelreflexkamera wird diese Versorgung mittels einem kleinen Booster-Board auf 8.5V konvertiert.
Die Knöpfe für die Bedienung sind an einer Halterung aus dem 3D-Drucker befestigt.





Da der Auslöser über einen gängigen XLR Stecker angeschlossen wird, kann auch die Länge des Kabels und die Art des Auslösers einfach ausgewechselt werden.
 Dafür habe ich mir zwei Szenarien überlegt: 
Der Automat wird so aufgestellt, dass die Gäste sitzen. Hier ist ein grosser Knopf praktisch, der z.B auf einem Tisch stehen kann.
Der Automat ist auf einem Boxenstativ montiert und die Gäste stehen. Im Stand ist ein Knopf auf dem Tisch unpraktisch. Hier kommt ein kleiner Handauslöser zum Einsatz, der direkt aufs Kabelende aufgesteckt wird.








Der Drucker ist bereits für die Montage in einem Kasten vorbestimmt. Jedoch ist leider der integrierte Halter für Papierrollen sehr klein geraten. Darum habe ich in die Oberseite ein Loch geschnitten und mit dem 3D-Drucker einen angemesseneren Halter gedruckt.
Die Verbindung zum Raspberry Pi erfolgt über ein USB-Kabel.



Die Frontplatte ist aus gelasertem Edelstahl gefertigt. Diese konnte ich grosszügigerweise bei der Stahlfabrik eines Bekannten herstellen lassen. Hinter die Aussparungen für die Blitze habe ich zwei mit weisser Vinylfolie überzogene Plexiglasscheiben geklebt, die als Diffusor dienen.

Die Webcam ist hinter dem kleinen Loch oberhalb des Objektivs montiert und mittels einer kleinen 3D-gedruckten Halterung direkt an die Frontblende festgeklebt.

5.3 Grafischer Auftritt
Der Look und das Branding des Fotoautomats ist inspiriert von den analogen Fotokabinen der 1970er-Jahre, wie sie z.B oft in Berlin zu sehen sind. Diese Klassische Optik wollte ich in den modernen Fotoautomaten hineinarbeiten.              


Schlusswort
Mit dem Projekt wollte ich mir beweisen, dass ich in selbständiger Arbeit ein Produkt schaffen kann, das professionell aussieht und zuverlässig funktioniert.
Das Resultat ist eine kompakte, einfach transportierbare und vielseitige Fotobox, die sowohl auf einem Tisch als auch auf einem Boxenstativ aufgestellt werden kann, einfach zu benutzen ist und den State of the Art der Produktkategorie abbildet.

