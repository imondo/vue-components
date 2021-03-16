<template>
  <div class="nav-wrapper">
    <div class="nav-list">
      <ul class="nav-item" v-for="(item, index) in list" :key="index">
        <li>
          <h1 class="nav-item-title">{{ item.label }}</h1>
        </li>
        <li class="nav-item-link" v-for="(tag, i) in item.children" :key="i">
          <a class="nav-link" :href="tag.link" target="_blank">
            <h2 class="nav-link-title">
              {{ tag.title }} <span class="nav-link-desc">{{ tag.desc }}</span>
            </h2>
          </a>
        </li>
      </ul>
    </div>
    <ul class="nav-aside">
      <li v-for="(ad, index) in aside" :key="index">{{ ad }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      aside: ['测试1', '测试2', '技术', '技术'],
      list: [
        {
          label: '测试1',
          children: [
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            },
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            },
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            }
          ]
        },
        {
          label: '测试1',
          children: [
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            },
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            },
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            }
          ]
        },
        {
          label: '测试1',
          children: [
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            },
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            },
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            }
          ]
        },
        {
          label: '测试1',
          children: [
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            },
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            },
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            }
          ]
        },
        {
          label: '测试2',
          children: [
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            },
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            },
            {
              title: 'Vue',
              desc: 'Vue 技术文档',
              link: 'http://baidu.com'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.nav-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  .nav-aside {
    position: absolute;
    top: 20px;
    right: 0;
    width: 100px;
    padding: 30px;
    background-color: #fff;
  }
  .nav-list {
    margin-right: 15px;
    padding: 30px;
    background-color: #fff;
    .nav-item {
      margin-bottom: 20px;
    }
    .nav-item-title {
      margin-bottom: 20px;
      font-size: 20px;
    }
    .nav-item-link {
      margin-bottom: 10px;
    }
    .nav-link {
      display: inline-block;
      text-decoration: none;
      border-bottom: 1px dashed transparent;
      color: #333;
      .nav-link-title {
        font-size: 14px;
        font-weight: normal;
        color: #666;
      }
      &:hover {
        border-bottom: 1px dashed #000;
        .nav-link-title {
          color: #000;
        }
      }
    }
  }
}
</style>
