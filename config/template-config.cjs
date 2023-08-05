/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的倾倾宝贝, 早上好鸭',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}

      {{note_en.DATA}}

      {{note_ch.DATA}}
      
      ---
      
      宝贝么么哒~
      
      今天是我们在一起的第**{{love_day.DATA}}**天
      
      {{birthday_message.DATA}}

      {{wx_memorial_day.DATA}}
      
      ---

      {{course_schedule.DATA}}
      
      {{moment_copyrighting.DATA}}

      ---
      
      **你所在的城市**
      
      城市：{{city.DATA}}
      
      **今日{{tian_api_weather_date_0.DATA}}**
      
      天气：{{tian_api_weather_weather_0.DATA}}
      
      气温(最高/最低):{{tian_api_weather_highest_0.DATA}} / {{tian_api_weather_lowest_0.DATA}}

      降雨概率：{{tian_api_weather_pop_0.DATA}}
      
      风向: {{tian_api_weather_wind_0.DATA}}
      
      风级: {{tian_api_weather_windsc_0.DATA}}

      {{notice.DATA}}

      {{tian_api_weather_tips_0.DATA}}
      
      {{comprehensive_horoscope.DATA}}

      ---

      **{{tian_api_weather_date_1.DATA}}**
      
      天气：{{tian_api_weather_weather_1.DATA}}
      
      气温(最高/最低):{{tian_api_weather_highest_1.DATA}} / {{tian_api_weather_lowest_1.DATA}}

      降雨概率：{{tian_api_weather_pop_1.DATA}}
      
      风向: {{tian_api_weather_wind_1.DATA}}
      
      风级: {{tian_api_weather_windsc_1.DATA}}

      {{tian_api_weather_tips_1.DATA}}
      
      ---

      **{{tian_api_weather_date_2.DATA}}**
      
      天气：{{tian_api_weather_weather_2.DATA}}
      
      气温(最高/最低):{{tian_api_weather_highest_2.DATA}} / {{tian_api_weather_lowest_2.DATA}}

      降雨概率：{{tian_api_weather_pop_2.DATA}}
      
      风向: {{tian_api_weather_wind_2.DATA}}
      
      风级: {{tian_api_weather_windsc_2.DATA}}

      {{tian_api_weather_tips_2.DATA}}
      
      ---

      **{{tian_api_weather_date_3.DATA}}**
      
      天气：{{tian_api_weather_weather_3.DATA}}
      
      气温(最高/最低):{{tian_api_weather_highest_3.DATA}} / {{tian_api_weather_lowest_3.DATA}}

      降雨概率：{{tian_api_weather_pop_3.DATA}}
      
      风向: {{tian_api_weather_wind_3.DATA}}
      
      风级: {{tian_api_weather_windsc_3.DATA}}

      {{tian_api_weather_tips_3.DATA}}
      
      ---
            
      **我所在的城市**
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}

  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
