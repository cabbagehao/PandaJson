// 测试语言重定向功能
import { request } from 'http';

// 从i18n获取支持的语言列表
const locales = ['zh', 'en', 'es', 'ja', 'zh-tw', 'ar', 'hi', 'pt', 'fr', 'ru', 'de', 'vi', 'sw', 'mk', 'uz'];

// 服务器地址
const SERVER = 'localhost';
const PORT = 3000; // 如果端口被占用，请修改为实际端口

// 测试每个语言
async function testLanguages() {
  console.log('开始测试语言重定向功能...');
  console.log('=================================');
  
  for (const locale of locales) {
    await testLanguage(locale);
  }
  
  console.log('=================================');
  console.log('测试完成！');
}

// 测试单个语言
function testLanguage(locale) {
  return new Promise((resolve) => {
    const options = {
      hostname: SERVER,
      port: PORT,
      path: '/',
      method: 'HEAD',
      headers: {
        'Accept-Language': `${locale};q=0.9`
      }
    };
    
    const req = request(options, (res) => {
      const redirectUrl = res.headers.location;
      const success = redirectUrl && redirectUrl.includes(`/${locale}`);
      
      console.log(`语言: ${locale.padEnd(6)} - ${success ? '✅ 成功' : '❌ 失败'} ${redirectUrl || '没有重定向'}`);
      resolve();
    });
    
    req.on('error', (error) => {
      console.error(`测试 ${locale} 失败:`, error.message);
      resolve();
    });
    
    req.end();
  });
}

// 验证Cookie设置
async function testCookiePersistence() {
  console.log('\n测试Cookie持久化...');
  console.log('=================================');
  
  const options = {
    hostname: SERVER,
    port: PORT,
    path: '/',
    method: 'HEAD',
    headers: {
      'Accept-Language': 'fr;q=0.9',
      'Cookie': 'NEXT_LOCALE=zh'
    }
  };
  
  return new Promise((resolve) => {
    const req = request(options, (res) => {
      const redirectUrl = res.headers.location;
      const success = redirectUrl && redirectUrl.includes('/zh');
      
      console.log(`Cookie优先级测试: ${success ? '✅ 成功' : '❌ 失败'} ${redirectUrl || '没有重定向'}`);
      console.log('(Accept-Language=fr, Cookie=zh, 应该重定向到/zh)');
      resolve();
    });
    
    req.on('error', (error) => {
      console.error('Cookie测试失败:', error.message);
      resolve();
    });
    
    req.end();
  });
}

// 运行测试
async function runTests() {
  await testLanguages();
  await testCookiePersistence();
}

runTests(); 