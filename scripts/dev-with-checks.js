import { spawn } from 'child_process';
import path from 'path';

// 运行翻译检查
console.log('🔍 正在检查翻译文件键的一致性...');
const checkProcess = spawn('npm', ['run', 'check-translations'], { 
  stdio: 'inherit',
  shell: true
});

checkProcess.on('close', (code) => {
  console.log(`\n🔄 翻译检查${code === 0 ? '通过' : '失败'}! (退出码: ${code})`);
  
  // 无论检查成功或失败，都启动开发服务器
  console.log('\n🚀 正在启动开发服务器...\n');
  const devProcess = spawn('next', ['dev', '--turbopack'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env }
  });
  
  // 处理开发服务器进程的事件
  devProcess.on('close', (devCode) => {
    console.log(`\n💤 开发服务器已关闭 (退出码: ${devCode})`);
  });
  
  // 处理进程终止信号
  process.on('SIGINT', () => {
    devProcess.kill('SIGINT');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    devProcess.kill('SIGTERM');
    process.exit(0);
  });
}); 