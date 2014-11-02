void setup()
{
  Serial.begin(9600);
}

float humidity()
{
  float a = 96.45;
  return a;
}

float temperature()
{
  float a = 21.23;
  return a;
}

float lightVoltage()
{
  float a = 2.76;
  return a;
}

float gas()
{
  float a = 8.66;
  return a;
}

float particulateMatter()
{
  float a = 07.41;
  return a;
}

void loop()
{
  String payload = "{'Type':'Sensor','Temp':";

  float tempf = temperature();
  int temp1 = (int)tempf;
  int temp2 = (tempf - temp1) * 100;
  String temp="";
  temp += temp1;
  temp += ".";
  if (temp2<10)
    temp += "0";
  temp += temp2;

  payload += temp;
  payload += ",'Humid':";

  float humidf = humidity();
  int humid1 = (int)humidf;
  int humid2 = (humidf - humid1) * 100;
  String humid="";
  humid += humid1;
  humid += ".";
  if (humid2<10)
    humid += "0";
  humid += humid2;

  payload += humid;
  payload += ",'Light':";

  float lightf = lightVoltage();
  int light1 = (int)lightf;
  int light2 = (lightf - light1) * 100;
  String light="";
  light += light1;
  light += ".";
  if (light2<10)
    light += "0";
  light += light2;

  payload += light;
  payload += ",'CO':";
  
  float COf = gas();
  int CO1 = (int)COf;
  int CO2 = (COf - CO1) * 100;
  String CO="";
  CO += CO1;
  CO += ".";
  if (CO2<10)
    CO += "0";
  CO += CO2;
  
  payload += CO;
  payload += ",'PM':";
  
  float PMf = particulateMatter();
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
  Serial.print(payload);
  Serial.print("\n");
  delay(9000);
}

