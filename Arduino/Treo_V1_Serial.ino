#include "DHT.h"

#define DHTPIN 5
#define DHTTYPE DHT11

DHT dht(DHTPIN,DHTTYPE);

int pin = 8;
unsigned long starttime;

void setup()
{
  Serial.begin(57600);
  pinMode(pin,INPUT);
  dht.begin();
  starttime = millis();
}

void loop()
{
  String payload = "{\"Type\":\"Sensor\"";
  payload += PMatter();
  payload += ",\"Temp\":";

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
  payload += ",\"Humid\":";

  float humidf = humidity();
  int humid1 = (int)humidf;
  String humid="";
  humid += humid1;

  payload += humid;
  payload += ",\"Light\":";

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
  payload += ",\"CO\":";

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
  payload += "}";
  
  Serial.println(payload);
  delay(1000);
}

float humidity()
{
  float a = dht.readHumidity();
  return a;
}

float temperature()
{
  float a = dht.readTemperature();
  return a;
}

float lightVoltage()
{
  int a =  analogRead(A1);
  float voltage = a * (3.3 /1023.0);
  return voltage;
}

float gas()
{
  int a = analogRead(A0);
  float voltage = a * (3.3 / 1023.0);
  return voltage;
}

float particulateMatter()
{
  unsigned long duration;
  unsigned long sampletime_ms = 5000;
  unsigned long lowpulseoccupancy = 0;
  float ratio = 0;
  float concentration = 0;
  int exit = 0;
  while(exit ==0)
  {
    duration = pulseIn(pin, LOW);
    lowpulseoccupancy = lowpulseoccupancy+duration;

    if ((millis()-starttime) > sampletime_ms && exit == 0)
    {
      ratio = lowpulseoccupancy/(sampletime_ms*10.0);
      concentration = 1.1*pow(ratio,3)-3.8*pow(ratio,2)+520*ratio+0.62; 
      lowpulseoccupancy = 0;
      starttime = millis();
      if(concentration>1)
      {
        exit =1;
        return concentration;
      }
    }
  }
}

String PMatter()
{
  String matter = "";
  matter += ",\"PM\":";
  
  float PMf = particulateMatter();
  int PM1 = (int)PMf;
  int PM2 = (PMf - PM1) * 100;
  String PM="";
  PM += PM1;
  PM += ".";
  if (PM2<10)
    PM += "0";
  PM += PM2;

  matter += PM;
  return matter;
}
