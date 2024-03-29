import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public startX: any;
  public startWidth: any;
  public handle: HTMLElement;
  public pressed = false;
  public response: any;
  public content: any;
  public showColumns: any;
  public headers: any;
  public pageOptions: any;
  public numPerPage: any;
  public pageNo: any;
  public noOfPages: any;
  public showMessage: string;
  public selectedRows: any;

  constructor() {
    this.response = {
      report: [
        {
          "id": 1,
          "first_name": "Alli",
          "last_name": "Cassey",
          "email": "acassey0@list-manage.com",
          "gender": "Female",
          "ip_address": "129.82.128.62"
        },
        {
          "id": 2,
          "first_name": "Clyde",
          "last_name": "Bromage",
          "email": "cbromage1@bbb.org",
          "gender": "Male",
          "ip_address": "232.45.125.179"
        },
        {
          "id": 3,
          "first_name": "Janeczka",
          "last_name": "Trett",
          "email": "jtrett2@vistaprint.com",
          "gender": "Female",
          "ip_address": "149.4.116.82"
        },
        {
          "id": 4,
          "first_name": "Kristoforo",
          "last_name": "Duplain",
          "email": "kduplain3@vimeo.com",
          "gender": "Male",
          "ip_address": "137.198.100.233"
        },
        {
          "id": 5,
          "first_name": "Devonna",
          "last_name": "Medeway",
          "email": "dmedeway4@google.nl",
          "gender": "Female",
          "ip_address": "136.193.208.118"
        },
        {
          "id": 6,
          "first_name": "Kincaid",
          "last_name": "Blagdon",
          "email": "kblagdon5@wunderground.com",
          "gender": "Male",
          "ip_address": "192.198.63.72"
        },
        {
          "id": 7,
          "first_name": "Stella",
          "last_name": "Parkman",
          "email": "sparkman6@cornell.edu",
          "gender": "Female",
          "ip_address": "0.210.239.37"
        },
        {
          "id": 8,
          "first_name": "Bowie",
          "last_name": "Concklin",
          "email": "bconcklin7@webnode.com",
          "gender": "Male",
          "ip_address": "83.150.196.191"
        },
        {
          "id": 9,
          "first_name": "Robin",
          "last_name": "Thickett",
          "email": "rthickett8@boston.com",
          "gender": "Female",
          "ip_address": "44.251.154.187"
        },
        {
          "id": 10,
          "first_name": "Lanie",
          "last_name": "Parsall",
          "email": "lparsall9@rediff.com",
          "gender": "Male",
          "ip_address": "243.29.74.93"
        },
        {
          "id": 11,
          "first_name": "Guido",
          "last_name": "Pilsworth",
          "email": "gpilswortha@guardian.co.uk",
          "gender": "Male",
          "ip_address": "51.169.243.235"
        },
        {
          "id": 12,
          "first_name": "Delphine",
          "last_name": "Keemar",
          "email": "dkeemarb@xrea.com",
          "gender": "Female",
          "ip_address": "249.147.51.7"
        },
        {
          "id": 13,
          "first_name": "Joice",
          "last_name": "Trevethan",
          "email": "jtrevethanc@prlog.org",
          "gender": "Female",
          "ip_address": "221.192.172.107"
        },
        {
          "id": 14,
          "first_name": "Maryanne",
          "last_name": "Clutton",
          "email": "mcluttond@hud.gov",
          "gender": "Female",
          "ip_address": "251.206.155.61"
        },
        {
          "id": 15,
          "first_name": "Corry",
          "last_name": "Angrock",
          "email": "cangrocke@tamu.edu",
          "gender": "Female",
          "ip_address": "178.214.56.82"
        },
        {
          "id": 16,
          "first_name": "Ellary",
          "last_name": "Lenton",
          "email": "elentonf@qq.com",
          "gender": "Male",
          "ip_address": "46.147.174.239"
        },
        {
          "id": 17,
          "first_name": "Yalonda",
          "last_name": "Klewi",
          "email": "yklewig@posterous.com",
          "gender": "Female",
          "ip_address": "74.201.18.18"
        },
        {
          "id": 18,
          "first_name": "Templeton",
          "last_name": "Bellany",
          "email": "tbellanyh@amazonaws.com",
          "gender": "Male",
          "ip_address": "245.101.152.227"
        },
        {
          "id": 19,
          "first_name": "Lem",
          "last_name": "Powlett",
          "email": "lpowletti@ning.com",
          "gender": "Male",
          "ip_address": "110.221.76.183"
        },
        {
          "id": 20,
          "first_name": "Homer",
          "last_name": "Otter",
          "email": "hotterj@privacy.gov.au",
          "gender": "Male",
          "ip_address": "14.166.211.16"
        },
        {
          "id": 21,
          "first_name": "Misti",
          "last_name": "Offen",
          "email": "moffenk@aboutads.info",
          "gender": "Female",
          "ip_address": "210.47.221.155"
        },
        {
          "id": 22,
          "first_name": "Garrick",
          "last_name": "Bachshell",
          "email": "gbachshelll@purevolume.com",
          "gender": "Male",
          "ip_address": "46.160.139.42"
        },
        {
          "id": 23,
          "first_name": "Jdavie",
          "last_name": "Krysztowczyk",
          "email": "jkrysztowczykm@dailymail.co.uk",
          "gender": "Male",
          "ip_address": "88.227.188.68"
        },
        {
          "id": 24,
          "first_name": "Flinn",
          "last_name": "Agate",
          "email": "fagaten@smugmug.com",
          "gender": "Male",
          "ip_address": "57.160.166.16"
        },
        {
          "id": 25,
          "first_name": "Jobye",
          "last_name": "Howgate",
          "email": "jhowgateo@house.gov",
          "gender": "Female",
          "ip_address": "86.120.201.198"
        },
        {
          "id": 26,
          "first_name": "Marijn",
          "last_name": "Smye",
          "email": "msmyep@patch.com",
          "gender": "Male",
          "ip_address": "68.97.131.63"
        },
        {
          "id": 27,
          "first_name": "Nannie",
          "last_name": "Kroin",
          "email": "nkroinq@wsj.com",
          "gender": "Female",
          "ip_address": "160.143.19.141"
        },
        {
          "id": 28,
          "first_name": "Sholom",
          "last_name": "Burg",
          "email": "sburgr@feedburner.com",
          "gender": "Male",
          "ip_address": "160.74.67.197"
        },
        {
          "id": 29,
          "first_name": "Kelci",
          "last_name": "Yeoland",
          "email": "kyeolands@taobao.com",
          "gender": "Female",
          "ip_address": "97.129.104.131"
        },
        {
          "id": 30,
          "first_name": "Godart",
          "last_name": "Clines",
          "email": "gclinest@baidu.com",
          "gender": "Male",
          "ip_address": "98.80.202.8"
        },
        {
          "id": 31,
          "first_name": "Demetris",
          "last_name": "Koubek",
          "email": "dkoubeku@nhs.uk",
          "gender": "Male",
          "ip_address": "36.206.149.5"
        },
        {
          "id": 32,
          "first_name": "Karen",
          "last_name": "Guierre",
          "email": "kguierrev@parallels.com",
          "gender": "Female",
          "ip_address": "46.39.243.149"
        },
        {
          "id": 33,
          "first_name": "Jennee",
          "last_name": "Willoughey",
          "email": "jwillougheyw@cnn.com",
          "gender": "Female",
          "ip_address": "88.55.166.223"
        },
        {
          "id": 34,
          "first_name": "Beret",
          "last_name": "Habgood",
          "email": "bhabgoodx@trellian.com",
          "gender": "Female",
          "ip_address": "17.16.207.204"
        },
        {
          "id": 35,
          "first_name": "Moe",
          "last_name": "Rowe",
          "email": "mrowey@unesco.org",
          "gender": "Male",
          "ip_address": "245.53.213.113"
        },
        {
          "id": 36,
          "first_name": "Judith",
          "last_name": "Meeus",
          "email": "jmeeusz@slate.com",
          "gender": "Female",
          "ip_address": "143.16.107.169"
        },
        {
          "id": 37,
          "first_name": "Filberte",
          "last_name": "Waby",
          "email": "fwaby10@macromedia.com",
          "gender": "Male",
          "ip_address": "6.255.225.78"
        },
        {
          "id": 38,
          "first_name": "Payton",
          "last_name": "Lafoy",
          "email": "plafoy11@360.cn",
          "gender": "Male",
          "ip_address": "148.90.162.27"
        },
        {
          "id": 39,
          "first_name": "Chandler",
          "last_name": "Morde",
          "email": "cmorde12@g.co",
          "gender": "Male",
          "ip_address": "74.64.223.98"
        },
        {
          "id": 40,
          "first_name": "Marion",
          "last_name": "Lambarth",
          "email": "mlambarth13@state.gov",
          "gender": "Male",
          "ip_address": "156.255.214.186"
        },
        {
          "id": 41,
          "first_name": "Nester",
          "last_name": "Byass",
          "email": "nbyass14@google.co.jp",
          "gender": "Male",
          "ip_address": "87.209.37.192"
        },
        {
          "id": 42,
          "first_name": "Mart",
          "last_name": "Maun",
          "email": "mmaun15@odnoklassniki.ru",
          "gender": "Male",
          "ip_address": "208.157.77.173"
        },
        {
          "id": 43,
          "first_name": "Florida",
          "last_name": "Stronge",
          "email": "fstronge16@msn.com",
          "gender": "Female",
          "ip_address": "222.60.93.193"
        },
        {
          "id": 44,
          "first_name": "Valentina",
          "last_name": "Keller",
          "email": "vkeller17@hud.gov",
          "gender": "Female",
          "ip_address": "222.232.167.211"
        },
        {
          "id": 45,
          "first_name": "Eva",
          "last_name": "Cozens",
          "email": "ecozens18@archive.org",
          "gender": "Female",
          "ip_address": "178.78.26.105"
        },
        {
          "id": 46,
          "first_name": "Haze",
          "last_name": "Pietz",
          "email": "hpietz19@ted.com",
          "gender": "Male",
          "ip_address": "199.31.160.69"
        },
        {
          "id": 47,
          "first_name": "Salvador",
          "last_name": "Winwright",
          "email": "swinwright1a@yellowpages.com",
          "gender": "Male",
          "ip_address": "255.5.172.149"
        },
        {
          "id": 48,
          "first_name": "Cammie",
          "last_name": "Scotchmore",
          "email": "cscotchmore1b@apple.com",
          "gender": "Female",
          "ip_address": "130.107.246.65"
        },
        {
          "id": 49,
          "first_name": "Dimitry",
          "last_name": "Furmonger",
          "email": "dfurmonger1c@hud.gov",
          "gender": "Male",
          "ip_address": "234.39.200.67"
        },
        {
          "id": 50,
          "first_name": "Ike",
          "last_name": "Tuckie",
          "email": "ituckie1d@wikimedia.org",
          "gender": "Male",
          "ip_address": "235.206.129.113"
        }
      ]
    };
    this.showColumns = [
      {field: "id", title: "Id", show: true},
      {field: "first_name", title: "First Name", show: true},
      {field: "last_name", title: "Last Name", show: true},
      {field: "email", title: "Email", show: true},
      {field: "gender", title: "Gender", show: true},
      {field: "ip_address", title: "IP Address", show: true}
    ];
    this.headers = [];
    for (let i = 0; i < this.showColumns.length; i++){
      if (this.showColumns[i].show)
        this.headers.push(this.showColumns[i]);
    }
    this.pageOptions = [15, 20, 25, 30, 35, 40];
    this.numPerPage = 15;
    this.pageNo = 1;
    this.changePage();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var tableContainer = document.querySelector('.table-container');
    var tableTh = document.querySelectorAll('table th');
    tableContainer['style']['height'] = tableTh[0]['offsetHeight'] + 15 * document.querySelector('table td')['offsetHeight'] + 2 + 'px';
    this.onDoubleClick();
    for (let i = 1; i < tableTh.length - 1; i++) {
      tableTh[i].addEventListener('mousedown', (event) => {
        this.handle = <HTMLElement> tableTh[i];
        this.pressed = true;
        this.startX = event['clientX'];
        this.startWidth = tableTh[i].getBoundingClientRect().width;
        tableTh[i].classList.add('resizing');
      });
    }
  }

  @HostListener('dblclick', ['$event']) onDoubleClick() {
    var tableTh = document.querySelectorAll('table th');
    for (let i = 1; i < tableTh.length; i++)
      tableTh[i]['style']['width'] = 98 / this.headers.length + '%';
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event) {
    if (this.pressed) {
      var tableTh = document.querySelectorAll('table th');
      for (let i = 1; i < tableTh.length; i++)
        tableTh[i]['style']['width'] = '';
      this.handle['style']['width'] = this.startWidth + (event.clientX - this.startX) + 'px';
    }
  }

  @HostListener('mouseup', ['$event']) onMouseUp(event) {
    this.pressed = false;
    if (this.handle != undefined)
      this.handle.classList.remove('resizing');
  }

  changePageByButton(event) {
    if (event.target.title == 'First Page')
      this.pageNo = 1;
    else if (event.target.title == 'Previous Page')
      this.pageNo--;
    else if (event.target.title == 'Next Page')
      this.pageNo++;
    else if (event.target.title == 'Last Page')
      this.pageNo = this.noOfPages;
    this.changePage();
  }

  changePage() {
    this.noOfPages = Math.ceil(this.response.report.length / this.numPerPage);
    if (this.pageNo <= 0)
      this.pageNo = 1;
    else if (this.pageNo > this.noOfPages)
      this.pageNo = this.noOfPages;
    let i: number, l = (this.pageNo - 1) * this.numPerPage, 
      r = this.pageNo * this.numPerPage, size = this.response.report.length;
    r = r > size ? size : r;
    this.content = [];
    for (i = l; i < r; i++)
      this.content.push(this.response.report[i]);
    this.showMessage = "Showing " + (l + 1) + " to " + r + " of " + size + " entries";
  }

  selectAllRows() {
    var checkAll =  document.querySelector('th input[type=checkbox]');
    var checkboxes = document.querySelectorAll('td input[type=checkbox]');
    for (let i = 0; i < checkboxes.length; i++)
      checkboxes[i]['checked'] = checkAll['checked'];
    this.selectRow();
  }

  selectRow() {
    var checkboxes = document.querySelectorAll('td input[type=checkbox]');
    this.selectedRows = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i]['checked'])
        this.selectedRows.push(this.response.report[checkboxes[i]['value']]);
    }
    console.log(this.selectedRows);
  }
}
