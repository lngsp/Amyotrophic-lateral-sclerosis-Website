function incarcaPersoane(){
    var http = new XMLHttpRequest();
    var url = 'http://localhost:5678/resurse/persoane.xml';;
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        var parser=new DOMParser();
        var xmlDoc=parser.parseFromString(http.responseText,"text/xml");
        var table ="<table><tr><td>First name </td><td>| Second name </td><td>| Age </td><td>| Phone </td><td>| Nationality </td><td>| Graduated studied </td><td>| Adress </td></tr>";
        var persoana=xmlDoc.getElementsByTagName("persoana");
        for(let i=0;i<persoana.length;++i){
            table+="<tr>";
            table+="<td>"+persoana[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue+"</td>";
            table+="<td>"+persoana[i].getElementsByTagName("prenume")[0].childNodes[0].nodeValue+"</td>";
            table+="<td>"+persoana[i].getElementsByTagName("varsta")[0].childNodes[0].nodeValue+"</td>";
            table+="<td>"+persoana[i].getElementsByTagName("telefon")[0].childNodes[0].nodeValue+"</td>";
            table+="<td>"+persoana[i].getElementsByTagName("nationalitate")[0].childNodes[0].nodeValue+"</td>";
            table+="<td>"+persoana[i].getElementsByTagName("studii")[0].childNodes[0].nodeValue+"</td>";
            table+="<td>"+persoana[i].getElementsByTagName("adresa")[0].childNodes[0].nodeValue+"</td>";

            var adresa="<td>";
            adresa+="Street " + persoana[i].getElementsByTagName("strada")[0].innerHTML + ", ";
            adresa+=" nr. " + persoana[i].getElementsByTagName("numar")[0].innerHTML + ", ";
            adresa+=" District " + persoana[i].getElementsByTagName("localitate")[0].innerHTML + ", ";
            adresa+=" City " + persoana[i].getElementsByTagName("judet")[0].innerHTML + ", ";
            adresa+=" Country " +persoana[i].getElementsByTagName("tara")[0].innerHTML;
            adresa+="</td>";
            table+=adresa;

            table+="</tr>"
        }
        table+="</table>"
        document.getElementById("continut").innerHTML=table;
    }

}