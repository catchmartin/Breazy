void setup()
{
  Serial.begin(57600);
}

void loop()
{
  String payload = "{\"Type\":\"Sensor\",\"Temp\":";

  float tempf = 25.63;
  int temp1 = (int)tempf;
  int temp2 = (tempf - temp1) * 100;
  String temp="";
  temp += temp1;
  temp += ".";
  if (temp2<10)
    temp += "0";
  temp += temp2;

  payload += temp;
  payload += ",\"Humid\":";

  float humidf = 56.00;
  int humid1 = (int)humidf;
  String humid="";
  humid += humid1;

  payload += humid;
  payload += ",\"Light\":";

  float lightf = 4.89;
  int light1 = (int)lightf;
  int light2 = (lightf - light1) * 100;
  String light="";
  light += light1;
  light += ".";
  if (light2<10)
    light += "0";
  light += light2;

  payload += light;
  payload += ",\"CO\":";

  float COf = 200;
  int CO1 = (int)COf;
  int CO2 = (COf - CO1) * 100;
  String CO="";
  CO += CO1;
  CO += ".";
  if (CO2<10)
    CO += "0";
  CO += CO2;

  payload += CO;
  payload += ",\"PM\":";

  float PMf = 1400;
  int PM1 = (int)PMf;
  int PM2 = (PMf - PM1) * 100;
  String PM="";
  PM += PM1;
  PM += ".";
  if (PM2<10)
    PM += "0";
  PM += PM2;

  payload += PM;
  payload += "}";
  Serial.println(payload);
  delay(1000);
}
